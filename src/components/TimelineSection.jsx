import React from 'react';
import { Church, Wine, Music, Utensils, Cake, PartyPopper, Clock } from 'lucide-react';
import { weddingDetails } from '../data/weddingDetails';

const iconMap = {
  Church: Church,
  Wine: Wine,
  Music: Music,
  Utensils: Utensils,
  Cake: Cake,
  PartyPopper: PartyPopper,
};

export default function TimelineSection() {
  const { timeline } = weddingDetails;

  return (
    <section id="program" className="py-24 px-4 bg-[#FAF7F2] text-[#221A1A] relative overflow-hidden max-w-full w-full">
      <div className="max-w-4xl mx-auto">
        {/* Antet */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-[#741120] text-sm font-semibold tracking-widest uppercase mb-2">
            <span className="w-10 h-px bg-[#741120]"></span>
            <span>Momentele Cheie</span>
            <span className="w-10 h-px bg-[#741120]"></span>
          </div>

          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl tracking-[0.18em] text-[#221A1A] uppercase font-semibold">
            Programul Zilei
          </h2>
          <p className="mt-2 font-['Pinyon_Script'] text-3xl sm:text-5xl text-[#741120]">
            Fiecare oră, o nouă amintire prețioasă
          </p>
        </div>

        {/* Cronologie stilizată */}
        <div className="relative">
          {/* Linie verticală centrală */}
          <div className="hidden sm:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-[#d4af37]/50"></div>

          <div className="space-y-8 sm:space-y-12">
            {timeline.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Clock;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Conținut Card */}
                  <div className="w-full sm:w-[46%]">
                    <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#e8ded2] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
                      {/* Badge superior */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#741120]/10 text-[#741120]">
                          {item.badge}
                        </span>
                        <span className="text-xs sm:text-sm text-[#d4af37] font-bold">
                          Etapa 0{index + 1}
                        </span>
                      </div>

                      {/* Ora & Titlu */}
                      <div className="flex items-baseline space-x-3 mb-2">
                        <span className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-[#741120]">
                          {item.time}
                        </span>
                        <h3 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#221A1A] uppercase">
                          {item.title}
                        </h3>
                      </div>

                      {/* Locație */}
                      <p className="text-xs sm:text-sm text-[#8c6b3e] font-bold tracking-wide uppercase mb-2">
                        {item.location}
                      </p>

                      {/* Descriere */}
                      <p className="text-sm sm:text-base text-[#4a3d3d] font-['Cormorant_Garamond'] italic leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Punctul central cu icon */}
                  <div className="my-4 sm:my-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2 w-12 h-12 rounded-full bg-[#741120] border-2 border-[#d4af37] flex items-center justify-center text-white shadow-xl z-10">
                    <IconComponent className="w-6 h-6 text-[#fbe8a6]" />
                  </div>

                  {/* Spațiu gol pentru aliniere simetrică */}
                  <div className="hidden sm:block sm:w-[46%]"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Notă finală */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 text-[#741120]">
            <span className="w-12 h-px bg-[#741120]/30"></span>
            <span className="font-['Cormorant_Garamond'] text-xl italic text-[#4a3d3d] font-medium">
              „Timpul trece, dar bucuria acestei seri va rămâne veșnică.”
            </span>
            <span className="w-12 h-px bg-[#741120]/30"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
