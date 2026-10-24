import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Car, Sparkles, ExternalLink } from 'lucide-react';
import { weddingDetails } from '../data/weddingDetails';

export default function VenueSection() {
  const [copied, setCopied] = useState(false);
  const { event } = weddingDetails;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${event.venueName}, ${event.venueAddress}, ${event.venueCity}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="locatie" className="py-24 px-4 bg-playing-card-pattern text-white relative overflow-hidden max-w-full w-full">
      <div className="max-w-5xl mx-auto">
        {/* Antet Secțiune */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-2">
            <span className="w-10 h-px bg-[#d4af37]"></span>
            <span>Locul Evenimentului</span>
            <span className="w-10 h-px bg-[#d4af37]"></span>
          </div>

          <p className="font-['Cinzel'] text-sm sm:text-base tracking-[0.25em] text-[#fbe8a6] uppercase font-bold">
            VĂ INVITĂM LA
          </p>
          <h2 className="font-['Pinyon_Script'] text-6xl sm:text-8xl text-[#FAF7F2] font-normal mt-1 leading-none drop-shadow-md">
            {event.venueName}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/90 font-['Cormorant_Garamond'] italic max-w-xl mx-auto">
            Un loc cald și elegant, unde grădina verde și salonul feeric vor găzdui povestea noastră de neuitat.
          </p>
        </div>

        {/* Cardul Principal al Locației */}
        <div className="bg-[#FAF7F2] text-[#221A1A] rounded-3xl border-2 border-[#d4af37]/70 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Coloana Stângă: Detalii & Adresă Clară */}
            <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-[#741120] text-sm font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-5 h-5 text-[#b81d24]" />
                  <span>Adresă Oficială Eveniment</span>
                </div>

                <h3 className="font-['Cinzel'] text-2xl sm:text-3xl text-[#221A1A] font-bold tracking-wide">
                  {event.venueName}
                </h3>
                <p className="text-base sm:text-lg text-[#4a3b3b] mt-1 font-medium">
                  {event.venueAddress}, {event.venueCity}
                </p>

                {/* Facilități cu text mărit și lizibil */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-[#f5efe6] p-4 rounded-2xl border border-[#e4d8c8] flex items-start space-x-3">
                    <Car className="w-5 h-5 text-[#741120] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-[#221A1A] uppercase tracking-wider">Parcare Privată</p>
                      <p className="text-xs sm:text-sm text-[#554747] mt-0.5">Spațiu generos, gratuit și păzit pentru toate mașinile oaspeților.</p>
                    </div>
                  </div>

                  <div className="bg-[#f5efe6] p-4 rounded-2xl border border-[#e4d8c8] flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-[#d4af37] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-[#221A1A] uppercase tracking-wider">Grădină de Vară</p>
                      <p className="text-xs sm:text-sm text-[#554747] mt-0.5">Zonă verde de relaxare în aer liber, perfectă pentru fotografiile de seară.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-[#6b0f1a]/5 border border-[#6b0f1a]/20">
                  <p className="text-sm sm:text-base text-[#741120] font-['Cormorant_Garamond'] italic leading-relaxed">
                    „Am ales Avegarden pentru a vă oferi o seară plăcută și relaxantă, cu mese generoase și ring de dans spațios.”
                  </p>
                </div>
              </div>

              {/* Butoane de Navigație GPS - MARI, CLARE, UȘOR DE APĂSAT PENTRU ORICINE */}
              <div className="mt-8 pt-6 border-t border-[#741120]/15 flex flex-wrap gap-3">
                <a
                  href={event.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#741120] text-white hover:bg-[#8c1628] shadow-lg transition-all transform hover:scale-105"
                >
                  <Navigation className="w-4 h-4 text-[#d4af37]" />
                  <span>Deschide Google Maps</span>
                  <ExternalLink className="w-4 h-4 opacity-75" />
                </a>

                <a
                  href={event.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#221A1A] text-white hover:bg-[#3d3232] shadow-lg transition-all transform hover:scale-105"
                >
                  <Navigation className="w-4 h-4 text-[#fbe8a6]" />
                  <span>Navighează cu Waze</span>
                  <ExternalLink className="w-4 h-4 opacity-75" />
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-white border-2 border-[#741120]/30 text-[#741120] hover:bg-[#FAF7F2] transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Adresă Copiată!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiază Adresa</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Coloana Dreaptă: Caseta Vizuală cu Reper GPS */}
            <div className="lg:col-span-5 bg-[#3b060d] text-white p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l-2 border-[#d4af37]/40">
              <div>
                <span className="font-['Cinzel'] text-xs sm:text-sm tracking-widest text-[#d4af37] uppercase font-bold block mb-1">
                  Sosire &amp; Bun Venit
                </span>
                <h4 className="font-['Cinzel'] text-xl font-semibold text-[#FAF7F2]">
                  Vă așteptăm cu drag
                </h4>
                <p className="text-sm text-white/85 font-sans mt-2 leading-relaxed">
                  Vă recomandăm să sosiți începând cu <strong>ora 18:00</strong> pentru primirea oaspeților, cupa de șampanie și primele fotografii împreună.
                </p>

                {/* Mini preview locație */}
                <div className="mt-6 rounded-2xl overflow-hidden border-2 border-[#d4af37]/50 shadow-inner bg-[#240306] p-5 text-center flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#741120] border-2 border-[#d4af37] flex items-center justify-center shadow-lg animate-bounce mb-3">
                    <span className="text-2xl text-[#d4af37]">♥</span>
                  </div>
                  <p className="font-['Cinzel'] text-sm sm:text-base uppercase tracking-wider text-[#FAF7F2] font-bold">
                    {event.venueName}
                  </p>
                  <p className="text-xs sm:text-sm text-[#d4af37] mt-1 font-medium">
                    {event.venueAddress}
                  </p>
                  <span className="mt-3 inline-block px-3.5 py-1.5 rounded-full bg-white/15 text-xs text-white font-medium">
                    Apăsați butoanele din stânga pentru GPS direct
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/15 text-center">
                <p className="font-['Pinyon_Script'] text-3xl text-[#d4af37]">
                  Ne vedem la Avegarden!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
