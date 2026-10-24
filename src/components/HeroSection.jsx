import React, { useState } from 'react';
import { Heart, Sparkles, ChevronDown, RotateCw } from 'lucide-react';
import { weddingDetails } from '../data/weddingDetails';

export default function HeroSection({ onOpenOriginalsModal }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // 3D tilt activ doar pe dispozitive cu mouse
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left - card.width / 2;
    const y = e.clientY - card.top - card.height / 2;
    setTilt({
      x: -(y / card.height) * 8,
      y: (x / card.width) * 8
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="invitatie"
      className="relative min-h-screen pt-20 sm:pt-24 pb-20 px-4 flex flex-col items-center justify-start sm:justify-center bg-playing-card-pattern overflow-hidden max-w-full w-full text-white"
    >
      {/* Halo cald de lumină în fundal */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#a91d32]/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-[#d4af37]/20 rounded-full blur-2xl pointer-events-none"></div>

      {/* Titlu Superior (Aerisit, spațiat generos deasupra asului) */}
      <div className="text-center z-10 max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
        <div className="inline-flex items-center space-x-2 text-[#d4af37] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
          <span className="w-8 sm:w-10 h-px bg-[#d4af37]"></span>
          <span className="flex items-center gap-1.5 text-sm sm:text-base">
            <Heart className="w-4 h-4 fill-[#d4af37]" /> Asul de Inimă Roșie
          </span>
          <span className="w-8 sm:w-10 h-px bg-[#d4af37]"></span>
        </div>

        <h1 className="font-['Cinzel'] text-xl sm:text-2xl md:text-3xl font-medium tracking-[0.22em] text-[#FAF7F2] uppercase leading-relaxed drop-shadow-md">
          {weddingDetails.couple.quoteHeader}
        </h1>
        
        <p className="mt-3 text-white/90 text-sm sm:text-base tracking-wide font-['Cormorant_Garamond'] italic">
          O poveste scrisă în cărțile destinului • Alina &amp; Sergiu
        </p>
      </div>

      {/* ================= CARTEA DE JOC INTERACTIVĂ 3D (Dimensiune optimizată pentru telefon) ================= */}
      <div className="perspective-1000 z-20 w-[270px] sm:w-[325px] md:w-[365px] aspect-[1/1.55] relative cursor-pointer group">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y + (isFlipped ? 180 : 0)}deg)`,
            transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
            transformStyle: 'preserve-3d',
            WebkitTransformStyle: 'preserve-3d',
          }}
          className="w-full h-full relative rounded-[28px] sm:rounded-[32px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)]"
        >
          {/* ================= FAȚA CĂRȚII: Asul de Inimă (S & A) ================= */}
          <div
            style={{
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(1px)',
              WebkitTransform: 'translateZ(1px)',
              opacity: isFlipped ? 0 : 1,
              visibility: isFlipped ? 'hidden' : 'visible',
              pointerEvents: isFlipped ? 'none' : 'auto',
              zIndex: isFlipped ? 0 : 10,
              transition: 'opacity 0.4s ease, visibility 0.4s ease',
            }}
            className="absolute inset-0 rounded-[28px] sm:rounded-[32px] bg-[#FAF7F2] p-4 sm:p-5 flex flex-col justify-between select-none border-2 border-[#d4af37]/70 shadow-inner"
          >
            {/* Rame interioare duble */}
            <div className="absolute inset-2.5 sm:inset-3 rounded-[20px] sm:rounded-[24px] border-2 border-[#741120]/30 pointer-events-none"></div>
            <div className="absolute inset-3.5 sm:inset-4 rounded-[18px] sm:rounded-[20px] border border-[#741120]/15 pointer-events-none"></div>

            {/* Colț Stânga Sus: "A" și Inimă */}
            <div className="flex flex-col items-center w-8 sm:w-10 text-[#741120] z-10 pt-1 pl-1">
              <span className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-bold leading-none">A</span>
              <span className="text-xl sm:text-2xl leading-none text-[#b81d24]">♥</span>
            </div>

            {/* Inima Centrală Mare: S & A încadrat perfect în vectorul inimii */}
            <div className="flex-1 flex flex-col items-center justify-center my-auto z-10">
              <div className={`relative w-36 sm:w-44 aspect-square flex items-center justify-center ${isFlipped ? '' : 'animate-heart-float'}`}>
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full drop-shadow-[0_8px_18px_rgba(184,29,36,0.35)] overflow-visible"
                >
                  <defs>
                    <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c41e3a" />
                      <stop offset="100%" stopColor="#961219" />
                    </linearGradient>
                  </defs>
                  
                  {/* Forma clasică a inimii de joc de cărți */}
                  <path
                    d="M50,86 C50,86 10,58 10,32 C10,16 24,9 37,16 C44,20 50,27 50,27 C50,27 56,20 63,16 C76,9 90,16 90,32 C90,58 50,86 50,86 Z"
                    fill="url(#heartGradient)"
                  />

                  {/* Monograma S & A integrată nativ în SVG la dimensiunea optimă (încadrare garantată) */}
                  <text
                    x="50"
                    y="43"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#FAF7F2"
                    style={{
                      fontFamily: "'Pinyon Script', cursive",
                      fontSize: "22px",
                      fontWeight: "normal",
                      filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))"
                    }}
                  >
                    S &amp; A
                  </text>
                </svg>
              </div>

              {/* Data sub inima roșie */}
              <div className="mt-3 text-center">
                <p className="font-['Cinzel'] tracking-[0.25em] text-[11px] sm:text-xs text-[#741120] uppercase font-bold">
                  16 • IULIE • 2027
                </p>
              </div>
            </div>

            {/* Colț Dreapta Jos */}
            <div className="flex flex-col items-center w-8 sm:w-10 text-[#741120] z-10 pb-1 pr-1 self-end rotate-180">
              <span className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-bold leading-none">A</span>
              <span className="text-xl sm:text-2xl leading-none text-[#b81d24]">♥</span>
            </div>
          </div>

          {/* ================= SPATELE CĂRȚII: Mesajul Iubirii ================= */}
          <div
            style={{
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg) translateZ(1px)',
              WebkitTransform: 'rotateY(180deg) translateZ(1px)',
              opacity: isFlipped ? 1 : 0,
              visibility: isFlipped ? 'visible' : 'hidden',
              pointerEvents: isFlipped ? 'auto' : 'none',
              zIndex: isFlipped ? 20 : 0,
              transition: 'opacity 0.4s ease, visibility 0.4s ease',
            }}
            className="absolute inset-0 rounded-[28px] sm:rounded-[32px] bg-[#FAF7F2] p-5 sm:p-6 flex flex-col justify-between text-center select-none border-2 border-[#d4af37]/70 shadow-2xl"
          >
            <div className="absolute inset-2.5 sm:inset-3 rounded-[20px] sm:rounded-[24px] border-2 border-[#741120]/25 pointer-events-none"></div>

            <div className="pt-1">
              <span className="font-['Cinzel'] text-xs sm:text-sm font-bold tracking-[0.2em] text-[#741120] uppercase block">
                {weddingDetails.couple.quoteHeader}
              </span>
            </div>

            <div className="py-1">
              <h2 className="font-['Pinyon_Script'] text-4xl sm:text-5xl text-[#221A1A] leading-tight">
                Sergiu
              </h2>
              <span className="font-['Pinyon_Script'] text-2xl text-[#b81d24] block -my-1">&amp;</span>
              <h2 className="font-['Pinyon_Script'] text-4xl sm:text-5xl text-[#221A1A] leading-tight">
                Alina
              </h2>
            </div>

            <div className="space-y-2 px-1">
              <p className="font-['Cormorant_Garamond'] text-base sm:text-lg text-[#2d2424] leading-relaxed italic">
                „Împreună am tras cea mai frumoasă carte: <strong className="font-semibold text-[#741120]">iubirea</strong>.
                Acum vă invităm să fiți martorii momentului în care vom spune”
              </p>

              <p className="font-['Pinyon_Script'] text-3xl sm:text-4xl text-[#b81d24] tracking-wide pt-0.5">
                „DA” pentru totdeauna
              </p>
            </div>

            <div className="flex items-center justify-center space-x-3 text-[#741120]/50 my-0.5">
              <span className="w-12 h-px bg-[#741120]/40"></span>
              <span className="text-base text-[#b81d24]">♥</span>
              <span className="w-12 h-px bg-[#741120]/40"></span>
            </div>
          </div>
        </div>

        {/* Buton întoarcere carte sub as */}
        <div className="mt-5 text-center">
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#FAF7F2] hover:text-[#d4af37] bg-black/50 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/20 backdrop-blur-sm transition-all"
          >
            <RotateCw className="w-4 h-4 text-[#d4af37]" />
            <span>{isFlipped ? 'Vezi Asul de Inimă' : 'Apasă pentru a citi mesajul de pe verso'}</span>
          </button>
        </div>
      </div>

      {/* ================= NUMELE MIRILOR (SPAȚIU GENEROS SUB AS) ================= */}
      <div className="text-center z-10 mt-14 sm:mt-18 px-4">
        <h2 className="font-['Pinyon_Script'] text-6xl sm:text-7xl md:text-8xl text-[#FAF7F2] font-normal tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
          {weddingDetails.couple.fullNameText}
        </h2>
        
        {/* Spațiu aerisit între nume și dată/locație */}
        <p className="font-['Cinzel'] tracking-[0.25em] text-sm sm:text-base text-[#d4af37] uppercase font-semibold mt-4 sm:mt-5">
          {weddingDetails.event.fullDateDisplay} • {weddingDetails.event.venueName}
        </p>
      </div>

      {/* ================= BUTOANE DE ACȚIUNE RAPIDĂ ================= */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-12 z-10 px-4">
        <a
          href="#rsvp"
          className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold uppercase tracking-widest bg-gradient-to-r from-[#d4af37] via-[#e5c378] to-[#d4af37] text-[#2c0409] hover:brightness-110 shadow-2xl transition-all transform hover:-translate-y-0.5"
        >
          Confirmă Prezența (RSVP)
        </a>

        <a
          href="#data"
          className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wider text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-sm transition-all"
        >
          Detalii &amp; Numărătoare
        </a>
      </div>

      {/* Săgeată scroll cu distanță generoasă */}
      <a
        href="#data"
        aria-label="Mergi la detaliile evenimentului"
        className="mt-14 sm:mt-18 text-white/70 hover:text-[#d4af37] transition-colors animate-bounce z-10"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
