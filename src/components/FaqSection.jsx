import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { weddingDetails } from '../data/weddingDetails';

export default function FaqSection() {
  const { faq } = weddingDetails;
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 bg-playing-card-pattern text-white relative overflow-hidden max-w-full w-full">
      <div className="max-w-3xl mx-auto">
        {/* Antet Secțiune */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-2">
            <span className="w-10 h-px bg-[#d4af37]"></span>
            <HelpCircle className="w-4 h-4 text-[#d4af37]" />
            <span>Clarificări &amp; Detalii</span>
            <span className="w-10 h-px bg-[#d4af37]"></span>
          </div>

          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl tracking-[0.18em] text-[#FAF7F2] uppercase font-semibold">
            Întrebări Frecvente
          </h2>
          <p className="mt-2 font-['Pinyon_Script'] text-3xl sm:text-5xl text-[#fbe8a6]">
            Tot ce este util să cunoașteți
          </p>
        </div>

        {/* Lista Accordion */}
        <div className="space-y-4">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FAF7F2] text-[#221A1A] rounded-2xl border-2 border-[#d4af37]/60 overflow-hidden shadow-lg transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-['Cinzel'] text-sm sm:text-base font-bold uppercase tracking-wider text-[#741120] flex items-center gap-2.5">
                    <span className="text-[#b81d24] text-lg">♥</span> {item.q}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#741120] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#b81d24]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#3d3030] font-sans leading-relaxed border-t border-[#741120]/15 bg-white/80">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Buton Contact Suplimentar */}
        <div className="mt-12 text-center">
          <p className="text-sm sm:text-base text-white/90 font-sans mb-3">
            Aveți orice altă întrebare organizatorică?
          </p>
          <a
            href={`https://wa.me/37360123456?text=${encodeURIComponent("Bună Alina & Sergiu, am o întrebare legată de nuntă!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-xl transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Scrie-ne pe WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
