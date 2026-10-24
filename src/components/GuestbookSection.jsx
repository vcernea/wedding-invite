import React, { useState, useEffect } from 'react';
import { Heart, Send } from 'lucide-react';

const INITIAL_MESSAGES = [
  {
    id: 1,
    name: "Elena & Andrei M.",
    city: "București",
    message: "Ați tras cea mai frumoasă carte a destinului! Vă dorim o viață plină de iubire sinceră, zâmbete și călătorii minunate. Abia așteptăm să dansăm alături de voi pe 16 Iulie!",
    date: "2 zile în urmă",
    likes: 12,
  },
  {
    id: 2,
    name: "Vlad C.",
    city: "Londra, UK",
    message: "Alina și Sergiu, o potrivire de nota 10! Asul de inimă a fost cu voi din prima zi. Vin special din Anglia pentru marele vostru moment!",
    date: "5 zile în urmă",
    likes: 18,
  },
  {
    id: 3,
    name: "Fam. Ionescu",
    city: "Chișinău",
    message: "Să fiți mereu la fel de luminoși și fericiți ca în această clipă. Împreună până la capătul cărților și dincolo de ele!",
    date: "1 săptămână în urmă",
    likes: 9,
  }
];

export default function GuestbookSection() {
  const [messages, setMessages] = useState([]);
  const [newName, setNewName] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [likedIds, setLikedIds] = useState(new Set());

  useEffect(() => {
    try {
      const saved = localStorage.getItem('wedding_guestbook_messages');
      if (saved) {
        setMessages(JSON.parse(saved));
      } else {
        setMessages(INITIAL_MESSAGES);
      }
    } catch (e) {
      setMessages(INITIAL_MESSAGES);
    }
  }, []);

  const handleAddMessage = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newMessage.trim()) return;

    const entry = {
      id: Date.now(),
      name: newName.trim(),
      city: newCity.trim() || 'Invitat de Onoare',
      message: newMessage.trim(),
      date: 'Chiar acum',
      likes: 1,
    };

    const updated = [entry, ...messages];
    setMessages(updated);
    try {
      localStorage.setItem('wedding_guestbook_messages', JSON.stringify(updated));
    } catch (err) {}

    setNewName('');
    setNewCity('');
    setNewMessage('');
  };

  const handleLike = (id) => {
    if (likedIds.has(id)) return;

    const updated = messages.map((m) =>
      m.id === id ? { ...m, likes: m.likes + 1 } : m
    );
    setMessages(updated);
    setLikedIds(new Set([...likedIds, id]));

    try {
      localStorage.setItem('wedding_guestbook_messages', JSON.stringify(updated));
    } catch (e) {}
  };

  return (
    <section className="py-24 px-4 bg-[#FAF7F2] text-[#221A1A] relative overflow-hidden max-w-full w-full">
      <div className="max-w-4xl mx-auto">
        {/* Antet */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-[#741120] text-sm font-semibold tracking-widest uppercase mb-2">
            <span className="w-10 h-px bg-[#741120]"></span>
            <span>Gânduri Calde</span>
            <span className="w-10 h-px bg-[#741120]"></span>
          </div>

          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl tracking-[0.18em] text-[#221A1A] uppercase font-semibold">
            Cartea de Oaspeți
          </h2>
          <p className="mt-2 font-['Pinyon_Script'] text-3xl sm:text-5xl text-[#741120]">
            Urări pentru Alina &amp; Sergiu
          </p>
        </div>

        {/* Formular Adăugare Urare */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#e8ded2] shadow-lg mb-12 relative">
          <h3 className="font-['Cinzel'] text-base sm:text-lg font-bold uppercase tracking-wider text-[#741120] mb-4 text-center">
            Lasă un gând bun pentru miri
          </h3>

          <form onSubmit={handleAddMessage} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Numele tău sau al familiei tale *"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-[#d6c9b8] bg-[#FAF7F2] text-base focus:outline-none focus:ring-2 focus:ring-[#741120]"
              />
              <input
                type="text"
                placeholder="Oraș / Țară (ex: Roma, Italia sau București)"
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#d6c9b8] bg-[#FAF7F2] text-base focus:outline-none focus:ring-2 focus:ring-[#741120]"
              />
            </div>

            <textarea
              placeholder="Scrie mesajul tău de felicitare..."
              rows="3"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-[#d6c9b8] bg-[#FAF7F2] text-base focus:outline-none focus:ring-2 focus:ring-[#741120]"
            ></textarea>

            <div className="text-right">
              <button
                type="submit"
                className="inline-flex items-center space-x-2 px-8 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#741120] text-white hover:bg-[#8c1628] shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Trimite Urarea</span>
              </button>
            </div>
          </form>
        </div>

        {/* Grilă Mesaje */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {messages.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border-2 border-[#e8ded2] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <div className="flex items-center justify-between mb-3 border-b border-[#741120]/15 pb-2">
                <div>
                  <h4 className="font-['Cinzel'] text-base font-bold text-[#221A1A]">
                    {item.name}
                  </h4>
                  <span className="text-xs sm:text-sm text-[#8c6b1e] font-semibold font-sans">
                    {item.city} • {item.date}
                  </span>
                </div>
                <span className="text-[#b81d24] font-serif text-2xl">♥</span>
              </div>

              <p className="text-sm sm:text-base text-[#3d3232] font-['Cormorant_Garamond'] italic leading-relaxed my-3">
                „{item.message}”
              </p>

              <div className="mt-4 pt-3 border-t border-[#741120]/10 flex items-center justify-between">
                <span className="text-xs text-[#735e5e] font-serif font-bold">Alina &amp; Sergiu 2027</span>
                <button
                  onClick={() => handleLike(item.id)}
                  className={`inline-flex items-center space-x-1.5 text-xs sm:text-sm px-3 py-1.5 rounded-full border-2 transition-all ${
                    likedIds.has(item.id)
                      ? 'bg-[#741120]/10 border-[#741120] text-[#741120] font-bold'
                      : 'border-gray-200 text-gray-500 hover:text-[#b81d24]'
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      likedIds.has(item.id) ? 'fill-[#b81d24] text-[#b81d24]' : ''
                    }`}
                  />
                  <span>{item.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
