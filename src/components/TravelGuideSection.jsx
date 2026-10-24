import React, { useState } from 'react';
import { Plane, Hotel, Car, Compass, ExternalLink, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { weddingDetails } from '../data/weddingDetails';

export default function TravelGuideSection() {
  const [activeTab, setActiveTab] = useState('hotels');
  const { travelGuide } = weddingDetails;

  return (
    <section id="ghid-calatorie" className="py-24 px-4 bg-playing-card-pattern text-white relative overflow-hidden max-w-full w-full">
      <div className="max-w-5xl mx-auto">
        {/* Antet Secțiune */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-2">
            <span className="w-10 h-px bg-[#d4af37]"></span>
            <Plane className="w-4 h-4 text-[#d4af37]" />
            <span>Pentru Oaspeții din Străinătate</span>
            <span className="w-10 h-px bg-[#d4af37]"></span>
          </div>

          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl tracking-[0.18em] text-[#FAF7F2] uppercase font-semibold">
            Ghid de Călătorie &amp; Cazare
          </h2>
          <p className="mt-3 font-['Cormorant_Garamond'] text-lg sm:text-2xl text-[#fbe8a6] italic max-w-2xl mx-auto leading-relaxed">
            „Știm că traversați granițe pentru a ne fi alături. Am pregătit toate informațiile practice pentru ca sosirea voastră să fie simplă și comodă.”
          </p>
        </div>

        {/* Butoane Tab-uri de Navigare (Mari, aerisite, ușor de atins pe ecran) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('hotels')}
            className={`px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center space-x-2 ${
              activeTab === 'hotels'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#e8c869] text-[#2c0409] shadow-xl scale-105'
                : 'bg-black/50 text-white hover:bg-black/70 border border-white/20'
            }`}
          >
            <Hotel className="w-4 h-4" />
            <span>Cazare &amp; Hoteluri</span>
          </button>

          <button
            onClick={() => setActiveTab('flights')}
            className={`px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center space-x-2 ${
              activeTab === 'flights'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#e8c869] text-[#2c0409] shadow-xl scale-105'
                : 'bg-black/50 text-white hover:bg-black/70 border border-white/20'
            }`}
          >
            <Plane className="w-4 h-4" />
            <span>Zboruri &amp; Aeroport</span>
          </button>

          <button
            onClick={() => setActiveTab('transport')}
            className={`px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center space-x-2 ${
              activeTab === 'transport'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#e8c869] text-[#2c0409] shadow-xl scale-105'
                : 'bg-black/50 text-white hover:bg-black/70 border border-white/20'
            }`}
          >
            <Car className="w-4 h-4" />
            <span>Transport Local &amp; Taxi</span>
          </button>

          <button
            onClick={() => setActiveTab('tips')}
            className={`px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center space-x-2 ${
              activeTab === 'tips'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#e8c869] text-[#2c0409] shadow-xl scale-105'
                : 'bg-black/50 text-white hover:bg-black/70 border border-white/20'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Sfaturi Practice</span>
          </button>
        </div>

        {/* Conținut Tab-uri */}
        <div className="bg-[#FAF7F2] text-[#221A1A] rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-[#d4af37]/60 shadow-2xl relative min-h-[400px]">
          <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-[#741120]/15 pointer-events-none"></div>

          {/* TAB 1: CAZARE */}
          {activeTab === 'hotels' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#741120]/15 mb-6">
                <div>
                  <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#741120]">
                    Hoteluri Recomandate în Chișinău
                  </h3>
                  <p className="text-sm text-[#554242] mt-1 font-medium">
                    Toate locațiile sunt verificate, sigure și situate la 12-20 minute cu mașina de Restaurantul Avegarden.
                  </p>
                </div>
                <span className="mt-3 sm:mt-0 inline-flex items-center text-xs sm:text-sm font-bold text-[#b81d24] bg-[#b81d24]/10 px-3.5 py-1.5 rounded-full self-start">
                  Ajutor cazare prin RSVP
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {travelGuide.hotels.map((hotel, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border-2 border-[#e8ded2] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#d4af37]/25 text-[#745512]">
                          {hotel.badge}
                        </span>
                        <span className="text-sm text-[#741120] font-bold font-sans">
                          {hotel.distance}
                        </span>
                      </div>

                      <h4 className="font-['Cinzel'] text-lg font-bold text-[#221A1A] mt-1">
                        {hotel.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#665050] font-medium mb-3">{hotel.location}</p>
                      <p className="text-sm text-[#3d3232] font-['Cormorant_Garamond'] italic leading-relaxed">
                        {hotel.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#741120]/10 flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-[#741120] font-bold">Rezervare:</span>
                      <a
                        href={hotel.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-[#741120] hover:text-[#b81d24] underline decoration-[#741120]/40 transition-colors"
                      >
                        <span>Verifică disponibilitatea</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-[#6b0f1a]/5 border border-[#6b0f1a]/15 text-center">
                <p className="text-sm text-[#741120] font-medium leading-relaxed">
                  💡 <strong>Asistență din partea mirilor:</strong> Dacă doriți să vă sprijinim cu rezervarea sau să vă grupați cu alți invitați, vă rugăm să bifați opțiunea din formularul RSVP de mai jos.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: ZBORURI & AEROPORT */}
          {activeTab === 'flights' && (
            <div>
              <div className="pb-4 border-b border-[#741120]/15 mb-6">
                <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#741120]">
                  Sosirea cu Avionul: Aeroportul Chișinău (RMO)
                </h3>
                <p className="text-sm text-[#554242] mt-1">
                  Cod aeroport internațional: <strong>RMO</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-2xl border-2 border-[#e8ded2]">
                    <h4 className="font-['Cinzel'] text-base font-bold text-[#221A1A] mb-1">
                      Distanță &amp; Conexiune la Eveniment
                    </h4>
                    <p className="text-sm text-[#4d4242] leading-relaxed">
                      Aeroportul se află la aproximativ 22 km de Restaurantul Avegarden (~30-35 de minute de mers cu taxiul sau transferul direct).
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border-2 border-[#e8ded2]">
                    <h4 className="font-['Cinzel'] text-base font-bold text-[#221A1A] mb-1">
                      Companii cu Zboruri Directe
                    </h4>
                    <p className="text-sm text-[#4d4242] leading-relaxed mb-3">
                      Există curse zilnice din România (București), Marea Britanie, Italia, Germania, Franța, Austria, Polonia și Turcia:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {travelGuide.airport.airlines.map((a, i) => (
                        <span key={i} className="px-3 py-1 bg-[#f4efe7] text-[#741120] text-xs font-bold rounded-lg border border-[#e4d8c8]">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-[#6b0f1a]/5 p-6 rounded-2xl border-2 border-[#6b0f1a]/20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-[#741120] font-bold text-base mb-2">
                      <AlertCircle className="w-5 h-5 text-[#b81d24]" />
                      <span>Recomandare Călătorie Iulie</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#4d4242] leading-relaxed font-['Cormorant_Garamond'] italic">
                      „Iulie este o lună plină de evenimente și concedii. Vă sugerăm cu drag să rezervați biletele de avion din timp pentru a avea tarife bune și ore de zbor comode.”
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#741120]/15">
                    <p className="text-xs sm:text-sm text-[#741120] font-bold">
                      Comunicați-ne data sosirii prin RSVP pentru a ne asigura că totul este pregătit!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TRANSPORT LOCAL */}
          {activeTab === 'transport' && (
            <div>
              <div className="pb-4 border-b border-[#741120]/15 mb-6">
                <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#741120]">
                  Cum vă deplasați în Chișinău
                </h3>
                <p className="text-sm text-[#554242] mt-1">
                  Deplasarea este simplă, sigură și foarte comodă.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white p-5 rounded-2xl border-2 border-[#e8ded2] flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#741120]/10 flex items-center justify-center text-[#741120] mb-3">
                      <Car className="w-6 h-6" />
                    </div>
                    <h4 className="font-['Cinzel'] text-base font-bold text-[#221A1A] mb-1">
                      Aplicații Taxi Recomandate
                    </h4>
                    <p className="text-sm text-[#4d4242] leading-relaxed mb-3">
                      Instalați gratuit aplicațiile locale pe telefon pentru curse cu preț fix și plată prin card bancar:
                    </p>
                    <ul className="text-sm space-y-1.5 font-bold text-[#741120]">
                      <li>• iTaxi (aplicație locală sigură)</li>
                      <li>• Letz</li>
                      <li>• Yandex Go</li>
                    </ul>
                  </div>
                  <p className="mt-4 text-xs text-[#735e5e] border-t pt-2 font-medium">
                    O cursă medie în oraș costă aprox. 5 - 8 EUR.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border-2 border-[#e8ded2] flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#d4af37]/25 flex items-center justify-center text-[#745512] mb-3">
                      <Compass className="w-6 h-6" />
                    </div>
                    <h4 className="font-['Cinzel'] text-base font-bold text-[#221A1A] mb-1">
                      Închirieri Auto (Rent-a-car)
                    </h4>
                    <p className="text-sm text-[#4d4242] leading-relaxed">
                      Dacă doriți să explorați și podgoriile sau atracțiile din împrejurimi, există birouri de închirieri direct în aeroport (Sixt, Europcar etc.).
                    </p>
                  </div>
                  <p className="mt-4 text-xs text-[#735e5e] border-t pt-2 font-medium">
                    Permisul de conducere european este pe deplin valabil.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border-2 border-[#e8ded2] flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#741120]/10 flex items-center justify-center text-[#741120] mb-3">
                      <Sparkles className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <h4 className="font-['Cinzel'] text-base font-bold text-[#221A1A] mb-1">
                      Transfer de Grup
                    </h4>
                    <p className="text-sm text-[#4d4242] leading-relaxed">
                      Dacă sosiți în grup mai numeros cu același zbor, vă putem ajuta cu un transfer organizat de la aeroport până la hotel.
                    </p>
                  </div>
                  <p className="mt-4 text-xs text-[#741120] font-bold border-t pt-2">
                    Menționați acest lucru în formularul RSVP!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SFATURI PRACTICE & ORAȘ */}
          {activeTab === 'tips' && (
            <div>
              <div className="pb-4 border-b border-[#741120]/15 mb-6">
                <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#741120]">
                  Ghid Practic de Călătorie
                </h3>
                <p className="text-sm text-[#554242] mt-1">
                  Informații utile pentru un sejur fără griji.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {travelGuide.practicalInfo.map((info, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border-2 border-[#e8ded2]">
                    <div className="flex items-center space-x-2 text-[#741120] font-bold text-sm uppercase tracking-wider mb-2">
                      <CheckCircle2 className="w-5 h-5 text-[#d4af37]" />
                      <span>{info.title}</span>
                    </div>
                    <p className="text-sm text-[#443838] leading-relaxed font-sans">
                      {info.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
