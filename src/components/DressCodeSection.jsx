import React from 'react';
import { Heart } from 'lucide-react';
import { weddingDetails } from '../data/weddingDetails';

export default function DressCodeSection() {
  const { dressCode } = weddingDetails;

  return (
    <section id="dress-code" className="py-24 px-4 bg-[#FAF7F2] text-[#221A1A] relative overflow-hidden max-w-full w-full">
      <div className="max-w-4xl mx-auto">
        {/* Antet Secțiune */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-[#741120] text-sm font-semibold tracking-widest uppercase mb-2">
            <span className="w-10 h-px bg-[#741120]"></span>
            <span>Eleganță &amp; Stil</span>
            <span className="w-10 h-px bg-[#741120]"></span>
          </div>

          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl tracking-[0.18em] text-[#221A1A] uppercase font-semibold">
            Codul Vestimentar
          </h2>
          <p className="mt-2 font-['Pinyon_Script'] text-3xl sm:text-5xl text-[#741120]">
            {dressCode.style}
          </p>
        </div>

        {/* Card Principal Dress Code */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 md:p-14 border-2 border-[#e8ded2] shadow-xl text-center relative overflow-hidden">
          <div className="absolute inset-3 sm:inset-5 rounded-2xl border border-[#741120]/15 pointer-events-none"></div>

          <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-[#3d3232] leading-relaxed italic max-w-2xl mx-auto">
            {dressCode.description}
          </p>

          {/* Ghid Doamne & Domni */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 max-w-2xl mx-auto text-left">
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border-2 border-[#e8ded2]">
              <span className="font-['Cinzel'] text-sm font-bold uppercase tracking-wider text-[#741120] block mb-2">
                Pentru Doamne
              </span>
              <p className="text-sm sm:text-base text-[#4d4242] font-['Cormorant_Garamond'] italic leading-relaxed">
                Rochii de seară lungi fluide sau rochii elegante midi de cocktail, țesături vaporoase și încălțăminte comodă pentru dans și terasa în aer liber.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border-2 border-[#e8ded2]">
              <span className="font-['Cinzel'] text-sm font-bold uppercase tracking-wider text-[#741120] block mb-2">
                Pentru Domni
              </span>
              <p className="text-sm sm:text-base text-[#4d4242] font-['Cormorant_Garamond'] italic leading-relaxed">
                Costum clasic elegant sau smoking, cămașă fină, cravată sau papion festiv. O ținută îngrijită, pregătită pentru o seară nobilă și festivă.
              </p>
            </div>
          </div>

          {/* Paletă Cromatică Sugerată */}
          <div className="mt-8 pt-8 border-t-2 border-[#741120]/15">
            <p className="font-['Cinzel'] text-sm uppercase tracking-widest text-[#741120] font-bold mb-6">
              Paletă de Culori Inspirată din Tematica Nunții
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {dressCode.colorPalette.map((color, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-300 relative flex items-center justify-center"
                    style={{ backgroundColor: color.hex }}
                  >
                    <span className="text-white/60 text-sm">♥</span>
                  </div>
                  <span className="font-['Cinzel'] text-xs sm:text-sm font-bold text-[#221A1A] mt-2 text-center">
                    {color.name}
                  </span>
                  <span className="text-xs text-[#665252] font-medium font-sans">
                    {color.note}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Notă prietenoasă despre alb */}
          <div className="mt-10 p-5 rounded-2xl bg-[#741120]/10 border-2 border-[#741120]/25 max-w-xl mx-auto flex items-center space-x-3 text-left">
            <Heart className="w-6 h-6 text-[#b81d24] shrink-0" />
            <p className="text-sm sm:text-base text-[#741120] font-['Cormorant_Garamond'] italic font-medium leading-relaxed">
              {dressCode.brideNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
