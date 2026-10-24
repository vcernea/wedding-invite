import React from 'react';
import { Heart } from 'lucide-react';
import { weddingDetails } from '../data/weddingDetails';

export default function LoveStorySection() {
  const { story } = weddingDetails;

  return (
    <section id="povestea" className="py-24 px-4 bg-[#FAF7F2] text-[#221A1A] relative overflow-hidden">
      {/* Decorațiuni de fundal */}
      <div className="absolute top-12 left-8 text-9xl text-[#741120]/5 pointer-events-none select-none font-serif">♥</div>
      <div className="absolute bottom-12 right-8 text-9xl text-[#741120]/5 pointer-events-none select-none font-serif">♦</div>

      <div className="max-w-4xl mx-auto">
        {/* Antet Secțiune */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-[#741120] text-sm font-semibold tracking-widest uppercase mb-2">
            <span className="w-10 h-px bg-[#741120]"></span>
            <span>Jocul Destinului</span>
            <span className="w-10 h-px bg-[#741120]"></span>
          </div>

          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl tracking-[0.18em] text-[#221A1A] uppercase font-semibold">
            {story.title}
          </h2>
          <p className="mt-2 font-['Pinyon_Script'] text-3xl sm:text-5xl text-[#741120]">
            {story.subtitle}
          </p>
        </div>

        {/* Textul Poveștii cu bordură de carte de joc */}
        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-12 border-2 border-[#d4af37]/50 shadow-xl mb-16">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#741120] border-2 border-[#d4af37] flex items-center justify-center text-white shadow-lg">
            <Heart className="w-5 h-5 fill-[#FAF7F2]" />
          </div>

          <div className="space-y-6 text-center font-['Cormorant_Garamond'] text-xl sm:text-2xl text-[#2e2424] leading-relaxed italic">
            {story.paragraphs.map((p, index) => (
              <p key={index} className="max-w-3xl mx-auto">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t-2 border-[#741120]/15 text-center">
            <p className="font-['Cinzel'] text-sm sm:text-base tracking-[0.25em] text-[#741120] uppercase font-bold">
              „Fiecare clipă este o carte jucată din toată inima”
            </p>
          </div>
        </div>

        {/* Cele 4 Cărți ale Destinului */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {story.highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] rounded-2xl p-6 border-2 border-[#e8ded2] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-['Cinzel'] text-sm font-bold tracking-widest text-[#741120]">
                  {item.number}
                </span>
                <span className="text-2xl text-[#b81d24]">
                  {item.suit}
                </span>
              </div>

              <div>
                <h3 className="font-['Cinzel'] text-sm sm:text-base tracking-wider uppercase text-[#221A1A] font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#443838] font-['Cormorant_Garamond'] italic leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#741120]/10 flex justify-end">
                <span className="text-xs text-[#741120] font-serif font-bold">Alina &amp; Sergiu</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
