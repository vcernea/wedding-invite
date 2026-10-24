import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Send, Heart, CheckCircle, Sparkles, User, Users, Utensils, Music, Hotel } from 'lucide-react';
import { weddingDetails } from '../data/weddingDetails';

export default function RsvpSection({ onGuestbookMessageAdded }) {
  const [formData, setFormData] = useState({
    fullName: '',
    emailOrPhone: '',
    attending: 'yes',
    guestCount: '1',
    partnerName: '',
    childrenCount: '0',
    dietaryPreference: 'standard',
    dietaryDetails: '',
    needsAccommodation: false,
    arrivalDate: '',
    favoriteSong: '',
    wishes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    try {
      const savedRsvp = localStorage.getItem('wedding_rsvp_alina_sergiu');
      if (savedRsvp) {
        setFormData(JSON.parse(savedRsvp));
        setSubmitted(true);
      }
    } catch (e) {
      console.warn("Storage read error:", e);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#741120', '#d4af37', '#fbe8a6', '#b81d24', '#ffffff'],
      });
    } catch (e) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      try {
        localStorage.setItem('wedding_rsvp_alina_sergiu', JSON.stringify(formData));
        if (formData.wishes.trim() && onGuestbookMessageAdded) {
          onGuestbookMessageAdded({
            name: formData.fullName,
            message: formData.wishes,
            date: "Acum",
            city: formData.needsAccommodation ? "Oaspete din Străinătate" : "Invitat de Onoare"
          });
        }
      } catch (err) {}

      setIsSubmitting(false);
      setSubmitted(true);
      if (formData.attending === 'yes') {
        triggerConfetti();
      }
    }, 500);
  };

  return (
    <section id="rsvp" className="py-24 px-4 bg-playing-card-pattern text-white relative overflow-hidden max-w-full w-full">
      <div className="max-w-3xl mx-auto">
        {/* Antet Secțiune */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-2">
            <span className="w-10 h-px bg-[#d4af37]"></span>
            <span>Confirmare Prezență</span>
            <span className="w-10 h-px bg-[#d4af37]"></span>
          </div>

          <h2 className="font-['Cinzel'] text-3xl sm:text-5xl tracking-[0.18em] text-[#FAF7F2] uppercase font-semibold">
            R.S.V.P.
          </h2>
          <p className="mt-2 font-['Pinyon_Script'] text-3xl sm:text-5xl text-[#fbe8a6]">
            Fii alături de noi în această zi unică
          </p>
          <p className="mt-3 text-sm sm:text-base text-white/90 font-sans max-w-lg mx-auto">
            Vă rugăm să ne confirmați decizia dumneavoastră până la data de{' '}
            <strong className="text-[#d4af37] underline decoration-[#d4af37]">{weddingDetails.event.rsvpDeadline}</strong>.
          </p>
        </div>

        {/* Card Formular */}
        <div className="bg-[#FAF7F2] text-[#221A1A] rounded-3xl p-6 sm:p-12 border-2 border-[#d4af37]/70 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] relative">
          <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-[#741120]/15 pointer-events-none"></div>

          {submitted ? (
            /* ================= CONFIRMARE SUCCES ================= */
            <div className="text-center py-6">
              <div className="w-20 h-20 rounded-full bg-[#741120] border-2 border-[#d4af37] flex items-center justify-center text-white mx-auto mb-4 shadow-xl">
                <CheckCircle className="w-10 h-10 text-[#d4af37]" />
              </div>

              <span className="font-['Cinzel'] text-sm uppercase tracking-widest text-[#741120] font-bold block mb-1">
                Răspunsul Tău a Fost Înregistrat!
              </span>

              <h3 className="font-['Pinyon_Script'] text-4xl sm:text-6xl text-[#221A1A] mb-4">
                Îți mulțumim din suflet, {formData.fullName}!
              </h3>

              {formData.attending === 'yes' ? (
                <div className="max-w-md mx-auto space-y-4">
                  <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-[#3d3232] italic leading-relaxed">
                    „Abia așteptăm să ciocnim o cupă de șampanie și să spunem «DA» alături de tine pe 16 Iulie 2027 la Avegarden!”
                  </p>

                  {/* Biletul virtual */}
                  <div className="bg-gradient-to-r from-[#6b0f1a] to-[#4d0812] text-white p-6 rounded-2xl border-2 border-[#d4af37] shadow-lg text-left relative overflow-hidden">
                    <div className="absolute top-2 right-3 text-5xl text-white/10 font-serif">♥</div>
                    <div className="flex items-center justify-between border-b border-white/20 pb-2 mb-3">
                      <span className="font-['Cinzel'] text-xs tracking-widest text-[#d4af37] uppercase font-bold">
                        Bilet Invitat de Onoare
                      </span>
                      <span className="text-sm text-[#FAF7F2] font-semibold">16.07.2027</span>
                    </div>

                    <h4 className="font-['Cinzel'] text-lg text-[#FAF7F2] font-bold">
                      {formData.fullName}
                      {formData.partnerName ? ` & ${formData.partnerName}` : ''}
                    </h4>
                    <p className="text-sm text-white/90 mt-1">
                      Număr persoane: <strong>{parseInt(formData.guestCount || '1') + parseInt(formData.childrenCount || '0')}</strong> • Meniu: <strong>{formData.dietaryPreference}</strong>
                    </p>
                    {formData.needsAccommodation && (
                      <p className="text-xs sm:text-sm text-[#fbe8a6] mt-3 bg-white/10 px-3 py-1.5 rounded-lg font-medium">
                        ✓ Asistență cazare &amp; călătorie solicitată
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <p className="font-['Cormorant_Garamond'] text-xl text-[#3d3232] italic max-w-md mx-auto leading-relaxed">
                  Ne pare rău că nu vei putea fi fizic prezent, dar știm că ne ești alături cu gândul. Îți mulțumim pentru căldura gândurilor transmise!
                </p>
              )}

              <div className="mt-8 pt-6 border-t border-[#741120]/15 flex justify-center">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#741120] border-2 border-[#741120]/40 hover:bg-[#741120]/10 transition-colors"
                >
                  Modifică Datele Răspunsului
                </button>
              </div>
            </div>
          ) : (
            /* ================= FORMULAR ACTIV ================= */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Opțiunea Participare */}
              <div>
                <label className="font-['Cinzel'] text-sm font-bold uppercase tracking-wider text-[#741120] block mb-3 text-center sm:text-left">
                  Vei fi alături de noi la nuntă? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label
                    className={`flex items-center space-x-3.5 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      formData.attending === 'yes'
                        ? 'border-[#741120] bg-[#741120]/10 shadow-md'
                        : 'border-[#e8ded2] bg-white hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={formData.attending === 'yes'}
                      onChange={handleChange}
                      className="accent-[#741120] w-5 h-5"
                    />
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-[#221A1A] uppercase tracking-wide">
                        DA, cu cel mai mare drag!
                      </span>
                      <span className="text-xs sm:text-sm text-[#5c4a4a]">
                        Voi/Vom participa la sărbătoare
                      </span>
                    </div>
                  </label>

                  <label
                    className={`flex items-center space-x-3.5 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      formData.attending === 'no'
                        ? 'border-[#741120] bg-[#741120]/10 shadow-md'
                        : 'border-[#e8ded2] bg-white hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formData.attending === 'no'}
                      onChange={handleChange}
                      className="accent-[#741120] w-5 h-5"
                    />
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-[#221A1A] uppercase tracking-wide">
                        Din păcate, nu pot ajunge
                      </span>
                      <span className="text-xs sm:text-sm text-[#5c4a4a]">
                        Vă voi fi alături cu inima
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Nume și Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-['Cinzel'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#221A1A] block mb-1.5">
                    Nume și Prenume *
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-[#741120] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Ex: Mihai Popescu"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-[#d6c9b8] bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#741120]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-['Cinzel'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#221A1A] block mb-1.5">
                    Telefon sau WhatsApp *
                  </label>
                  <input
                    type="text"
                    name="emailOrPhone"
                    required
                    placeholder="Ex: +40 7xx xxx xxx sau +373..."
                    value={formData.emailOrPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#d6c9b8] bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#741120]"
                  />
                </div>
              </div>

              {formData.attending === 'yes' && (
                <>
                  {/* Însoțitor & Număr persoane */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="sm:col-span-2">
                      <label className="font-['Cinzel'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#221A1A] block mb-1.5">
                        Nume Însoțitor (dacă veniți în cuplu)
                      </label>
                      <input
                        type="text"
                        name="partnerName"
                        placeholder="Ex: Elena Popescu"
                        value={formData.partnerName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#d6c9b8] bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#741120]"
                      />
                    </div>

                    <div>
                      <label className="font-['Cinzel'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#221A1A] block mb-1.5">
                        Număr Adulți
                      </label>
                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#d6c9b8] bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#741120]"
                      >
                        <option value="1">1 Persoană</option>
                        <option value="2">2 Persoane</option>
                        <option value="3">3 Persoane</option>
                        <option value="4">4 Persoane</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferințe Meniu */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-['Cinzel'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#221A1A] block mb-1.5">
                        Preferință Meniu
                      </label>
                      <select
                        name="dietaryPreference"
                        value={formData.dietaryPreference}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#d6c9b8] bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#741120]"
                      >
                        <option value="standard">Meniu Standard Festiv</option>
                        <option value="pescetarian">Pescetarian (pește / fructe de mare)</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan / De Post</option>
                        <option value="special">Fără Gluten / Alergii menționate</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-['Cinzel'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#221A1A] block mb-1.5">
                        Alergii sau Mențiuni Culinare
                      </label>
                      <input
                        type="text"
                        name="dietaryDetails"
                        placeholder="Ex: Alergie nuci, fără lactoză etc."
                        value={formData.dietaryDetails}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#d6c9b8] bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#741120]"
                      />
                    </div>
                  </div>

                  {/* Asistență Călătorie & Cazare (Oaspeți străinătate) */}
                  <div className="bg-[#6b0f1a]/5 p-5 rounded-2xl border-2 border-[#6b0f1a]/25">
                    <label className="flex items-start space-x-3.5 cursor-pointer">
                      <input
                        type="checkbox"
                        name="needsAccommodation"
                        checked={formData.needsAccommodation}
                        onChange={handleChange}
                        className="accent-[#741120] w-5 h-5 mt-0.5 shrink-0"
                      />
                      <div>
                        <span className="font-bold text-sm uppercase tracking-wider text-[#741120] block">
                          Călătoresc din străinătate și aș dori ajutor cu cazarea sau transferul
                        </span>
                        <span className="text-xs sm:text-sm text-[#554242] mt-0.5 block leading-relaxed">
                          Bifați această opțiune dacă veniți cu avionul sau doriți sprijin la rezervarea hotelului în Chișinău.
                        </span>
                      </div>
                    </label>

                    {formData.needsAccommodation && (
                      <div className="mt-4 pt-3 border-t border-[#741120]/20">
                        <label className="text-xs sm:text-sm font-bold text-[#221A1A] block mb-1">
                          Data estimată a sosirii în Chișinău:
                        </label>
                        <input
                          type="text"
                          name="arrivalDate"
                          placeholder="Ex: 15 Iulie cu zborul de seară..."
                          value={formData.arrivalDate}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-[#d6c9b8] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#741120]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Melodie dorită */}
                  <div>
                    <label className="font-['Cinzel'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#221A1A] block mb-1.5">
                      Melodia ta preferată pentru ringul de dans
                    </label>
                    <div className="relative">
                      <Music className="w-5 h-5 text-[#741120] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="favoriteSong"
                        placeholder="Artist - Numele piesei (pentru DJ)"
                        value={formData.favoriteSong}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-[#d6c9b8] bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#741120]"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Mesaj pentru Miri */}
              <div>
                <label className="font-['Cinzel'] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#221A1A] block mb-1.5">
                  O urare caldă pentru Alina &amp; Sergiu
                </label>
                <textarea
                  name="wishes"
                  rows="3"
                  placeholder="Scrie câteva gânduri pentru miri..."
                  value={formData.wishes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#d6c9b8] bg-white text-base focus:outline-none focus:ring-2 focus:ring-[#741120]"
                ></textarea>
              </div>

              {/* Buton Trimitere Formular */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 sm:px-14 py-4 rounded-full text-sm sm:text-base font-bold uppercase tracking-widest bg-gradient-to-r from-[#741120] via-[#8c1628] to-[#741120] text-white hover:brightness-110 shadow-2xl transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {isSubmitting ? 'Se trimite răspunsul...' : 'Trimite Confirmarea'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
