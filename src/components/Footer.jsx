import React from 'react';
import { ArrowUp, Calendar, MapPin } from 'lucide-react';
import { weddingDetails } from '../data/weddingDetails';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#240306] text-white pt-20 pb-28 px-4 border-t-2 border-[#d4af37]/40 relative overflow-hidden max-w-full w-full text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#741120]/25 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Simbolurile cărților de joc */}
        <div className="flex items-center justify-center space-x-6 text-2xl text-[#d4af37]/70 mb-6">
          <span>♠</span>
          <span className="text-[#b81d24]">♥</span>
          <span>♣</span>
          <span className="text-[#b81d24]">♦</span>
        </div>

        {/* Mesaj de încheiere */}
        <p className="font-['Pinyon_Script'] text-6xl sm:text-8xl text-[#b81d24] mb-3 leading-tight">
          {weddingDetails.couple.farewell}
        </p>

        {/* Numele mirilor */}
        <h3 className="font-['Pinyon_Script'] text-5xl sm:text-7xl text-[#FAF7F2] font-normal mb-4">
          {weddingDetails.couple.fullNameText}
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-5 text-sm sm:text-base tracking-widest uppercase font-['Cinzel'] text-[#d4af37] mb-8 font-semibold">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> 16 Iulie 2027 • ora 18:00
          </span>
          <span>•</span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Avegarden, Chișinău
          </span>
        </div>

        <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl italic text-white/85 max-w-lg mx-auto mb-10 leading-relaxed">
          „Împreună până la capătul cărților.”
        </p>

        {/* Buton Înapoi Sus */}
        <div className="mb-10">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border-2 border-white/25 transition-all hover:scale-105"
          >
            <ArrowUp className="w-4 h-4 text-[#d4af37]" />
            <span>Înapoi la Începutul Invitației</span>
          </button>
        </div>

        <div className="pt-8 border-t border-white/10 text-xs sm:text-sm text-white/50 font-sans">
          <p>Creat cu dragoste pentru nunta Alinei și a lui Sergiu.</p>
          <p className="mt-1">© 2027 • Alina &amp; Sergiu • 16 Iulie 2027</p>
        </div>
      </div>
    </footer>
  );
}
