import React, { useEffect, useState } from 'react';

export default function FloatingElements() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generăm un număr optim de petale și particule aurii pentru performanță maximă pe mobil
    const count = window.innerWidth < 768 ? 12 : 24;
    const items = [];
    const symbols = ['♥', '♦', '✦', '♥', '•'];

    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        left: `${6 + Math.random() * 88}%`,
        animationDuration: `${12 + Math.random() * 16}s`,
        animationDelay: `${Math.random() * 6}s`,
        fontSize: `${10 + Math.random() * 14}px`,
        opacity: 0.15 + Math.random() * 0.25,
        color: Math.random() > 0.4 ? '#b81d24' : '#d4af37',
        swayDuration: `${3 + Math.random() * 4}s`
      });
    }
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden max-w-full w-full z-10" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute select-none will-change-transform"
          style={{
            left: p.left,
            bottom: '-40px',
            fontSize: p.fontSize,
            color: p.color,
            opacity: p.opacity,
            animation: `floatUp ${p.animationDuration} linear infinite`,
            animationDelay: p.animationDelay,
            filter: 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.2))'
          }}
        >
          <span
            style={{
              display: 'inline-block',
              animation: `swaySide ${p.swayDuration} ease-in-out infinite alternate`
            }}
          >
            {p.symbol}
          </span>
        </div>
      ))}

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--tw-opacity, 0.35);
          }
          90% {
            opacity: var(--tw-opacity, 0.35);
          }
          100% {
            transform: translateY(-115vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes swaySide {
          0% { transform: translateX(-8px); }
          100% { transform: translateX(8px); }
        }
      `}</style>
    </div>
  );
}
