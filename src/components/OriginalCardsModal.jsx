import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Heart } from 'lucide-react';

const CARDS = [
  {
    id: 1,
    title: "Coperta: Asul de Inimă",
    subtitle: "„Împreună până la capătul cărților”",
    src: "/images/invitation_card_front.png",
    description: "Designul fizic original al coperții cu monograma S & A încrustată în inima roșie regală."
  },
  {
    id: 2,
    title: "Pagina 2: Mesajul Iubirii",
    subtitle: "„Cea mai frumoasă carte: iubirea”",
    src: "/images/invitation_card_text.png",
    description: "Mesajul caligrafic din invitația tipărită adresat invitaților dragi."
  },
  {
    id: 3,
    title: "Pagina 3: Data & Avegarden",
    subtitle: "„16 | 07 | 2027 • Restaurantul Avegarden”",
    src: "/images/invitation_card_venue.png",
    description: "Designul oficial cu data nunții, numărătoarea inversă și detaliile locației."
  }
];

export default function OriginalCardsModal({ isOpen, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? CARDS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === CARDS.length - 1 ? 0 : prev + 1));
  };

  const current = CARDS[activeIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#240306] rounded-3xl border-2 border-[#d4af37]/60 shadow-2xl p-5 sm:p-7 text-white flex flex-col max-h-[92vh] overflow-y-auto">
        {/* Buton Închidere */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/80 transition-colors z-20"
          aria-label="Închide fereastra"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Antet Modal */}
        <div className="text-center mb-4 pr-6">
          <div className="inline-flex items-center space-x-2 text-[#d4af37] text-xs sm:text-sm font-bold uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Invitația Fizică Originală</span>
          </div>
          <h3 className="font-['Cinzel'] text-lg sm:text-xl font-bold text-[#FAF7F2]">
            {current.title}
          </h3>
          <p className="font-['Pinyon_Script'] text-2xl text-[#d4af37] -mt-0.5">
            {current.subtitle}
          </p>
        </div>

        {/* Container Imagine cu Săgeți de Navigare */}
        <div className="relative flex-1 flex items-center justify-center my-2 bg-black/40 rounded-2xl p-2 border border-white/10 min-h-[380px]">
          <img
            src={current.src}
            alt={current.title}
            className="max-h-[58vh] w-auto object-contain rounded-xl shadow-2xl transition-all duration-300"
          />

          {/* Săgeți Navigare */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110"
            aria-label="Cardul anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110"
            aria-label="Cardul următor"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Descriere și Paginare Bullets */}
        <div className="text-center mt-3">
          <p className="text-sm sm:text-base text-white/90 font-['Cormorant_Garamond'] italic max-w-md mx-auto">
            {current.description}
          </p>

          <div className="flex items-center justify-center space-x-2 mt-4">
            {CARDS.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === i ? 'w-8 bg-[#d4af37]' : 'w-2 bg-white/30'
                }`}
                aria-label={`Mergi la ${c.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
