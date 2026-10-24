import React, { useState, useEffect } from 'react';
import { Calendar, Download } from 'lucide-react';
import { weddingDetails } from '../data/weddingDetails';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(weddingDetails.event.targetDateISO).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="data" className="py-24 px-4 bg-linen-subtle text-[#221A1A] relative overflow-hidden max-w-full w-full">
      <div className="max-w-4xl mx-auto">
        {/* Card principal identic cu Imaginea 3 */}
        <div className="bg-[#FAF7F2] rounded-3xl border-2 border-[#e8ded2] shadow-2xl p-6 sm:p-12 md:p-16 text-center relative overflow-hidden">
          {/* Ramă interioară */}
          <div className="absolute inset-3 sm:inset-5 rounded-2xl border-2 border-[#741120]/15 pointer-events-none"></div>

          {/* Titlu: VĂ INVITĂM LA CELEBRAREA IUBIRII NOASTRE */}
          <div className="mb-8">
            <h2 className="font-['Cinzel'] text-xl sm:text-2xl md:text-3xl tracking-[0.2em] text-[#221A1A] uppercase leading-relaxed font-semibold">
              VĂ INVITĂM LA CELEBRAREA
              <br />
              IUBIRII NOASTRE
            </h2>
          </div>

          {/* Data evidențiată cu bare verticale */}
          <div className="my-8">
            <div className="inline-flex items-center justify-center space-x-4 sm:space-x-8 font-['Cormorant_Garamond'] text-5xl sm:text-7xl md:text-8xl font-normal text-[#221A1A] tracking-wider">
              <span>16</span>
              <span className="text-[#741120]/40 font-light text-4xl sm:text-6xl">|</span>
              <span>07</span>
              <span className="text-[#741120]/40 font-light text-4xl sm:text-6xl">|</span>
              <span>2027</span>
            </div>

            <p className="mt-4 font-['Cinzel'] text-base sm:text-lg tracking-[0.2em] text-[#741120] uppercase font-bold">
              {weddingDetails.event.timeDisplay}
            </p>
          </div>

          {/* Locația: Restaurantul Avegarden */}
          <div className="my-8">
            <p className="font-['Cinzel'] text-sm sm:text-base tracking-[0.25em] text-[#221A1A]/75 uppercase font-medium">
              Restaurantul
            </p>
            <h3 className="font-['Pinyon_Script'] text-6xl sm:text-7xl md:text-8xl text-[#221A1A] font-normal leading-tight mt-1">
              Avegarden
            </h3>
            <p className="text-base sm:text-lg text-[#741120] font-['Cormorant_Garamond'] italic tracking-wide mt-1 font-semibold">
              {weddingDetails.event.venueCity}
            </p>
          </div>

          {/* Numărătoarea Inversă: 4 casete roșii rotunjite (Text mărit și contrast puternic) */}
          <div className="my-10">
            <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-xl mx-auto">
              {/* Zile */}
              <div className="bg-[#6b0f1a] rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 text-white flex flex-col items-center justify-center shadow-xl border-2 border-[#8f1729]">
                <span className="font-['Cormorant_Garamond'] text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
                  {timeLeft.days}
                </span>
                <span className="font-['Cinzel'] text-xs sm:text-sm tracking-widest text-[#fbe8a6] uppercase font-bold mt-1">
                  ZILE
                </span>
              </div>

              {/* Ore */}
              <div className="bg-[#6b0f1a] rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 text-white flex flex-col items-center justify-center shadow-xl border-2 border-[#8f1729]">
                <span className="font-['Cormorant_Garamond'] text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
                  {timeLeft.hours}
                </span>
                <span className="font-['Cinzel'] text-xs sm:text-sm tracking-widest text-[#fbe8a6] uppercase font-bold mt-1">
                  ORE
                </span>
              </div>

              {/* Minute */}
              <div className="bg-[#6b0f1a] rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 text-white flex flex-col items-center justify-center shadow-xl border-2 border-[#8f1729]">
                <span className="font-['Cormorant_Garamond'] text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
                  {timeLeft.minutes}
                </span>
                <span className="font-['Cinzel'] text-xs sm:text-sm tracking-widest text-[#fbe8a6] uppercase font-bold mt-1">
                  MIN
                </span>
              </div>

              {/* Secunde */}
              <div className="bg-[#6b0f1a] rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 text-white flex flex-col items-center justify-center shadow-xl border-2 border-[#8f1729]">
                <span className="font-['Cormorant_Garamond'] text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
                  {timeLeft.seconds}
                </span>
                <span className="font-['Cinzel'] text-xs sm:text-sm tracking-widest text-[#fbe8a6] uppercase font-bold mt-1">
                  SEC
                </span>
              </div>
            </div>
          </div>

          {/* Încheierea caligrafică */}
          <div className="mt-8 mb-4">
            <p className="font-['Pinyon_Script'] text-5xl sm:text-6xl md:text-7xl text-[#b81d24]">
              {weddingDetails.couple.farewell}
            </p>
            <div className="mt-3 flex justify-center">
              <span className="text-3xl sm:text-4xl text-[#b81d24] animate-pulse">♥</span>
            </div>
          </div>

          {/* Butoane Salvare în Calendar (Vizibile, clare, prietenoase pentru oricine) */}
          <div className="pt-8 border-t-2 border-[#741120]/15 flex flex-wrap items-center justify-center gap-4">
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#741120] text-white hover:bg-[#8c1628] shadow-lg transition-all transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 text-[#d4af37]" />
              <span>Adaugă în Google Calendar</span>
            </a>

            <button
              onClick={downloadIcsFile}
              className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-white border-2 border-[#741120]/40 text-[#741120] hover:bg-[#FAF7F2] shadow-md transition-all transform hover:scale-105"
            >
              <Download className="w-5 h-5 text-[#741120]" />
              <span>Descarcă Calendar Apple / Outlook</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
