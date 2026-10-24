import React, { useState } from 'react';
import EnvelopeIntro from './components/EnvelopeIntro';
import Navbar from './components/Navbar';
import FloatingElements from './components/FloatingElements';
import HeroSection from './components/HeroSection';
import CountdownSection from './components/CountdownSection';
import LoveStorySection from './components/LoveStorySection';
import VenueSection from './components/VenueSection';
import TimelineSection from './components/TimelineSection';
import TravelGuideSection from './components/TravelGuideSection';
import DressCodeSection from './components/DressCodeSection';
import RsvpSection from './components/RsvpSection';
import GuestbookSection from './components/GuestbookSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import OriginalCardsModal from './components/OriginalCardsModal';

export default function App() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#221A1A] font-sans antialiased overflow-x-hidden selection:bg-[#741120] selection:text-white">
      {/* 1. Experiența WOW de Descopertire: Plicul de Nuntă cu Sigiliu */}
      {showEnvelope && (
        <EnvelopeIntro onOpenComplete={() => setShowEnvelope(false)} />
      )}

      {/* 2. Particule & Petale Plutitoare Subtile */}
      <FloatingElements />

      {/* 3. Bară de Navigație Minimalistă */}
      <Navbar
        onReopenEnvelope={() => setShowEnvelope(true)}
      />

      {/* 4. Conținut Principal */}
      <main>
        {/* Hero: Asul de Inimă 3D Interactiv & Monograma S & A */}
        <HeroSection onOpenOriginalsModal={() => setIsModalOpen(true)} />

        {/* Numărătoarea Inversă & Data: 16 | 07 | 2027 */}
        <CountdownSection />

        {/* Povestea & Citatul: „Împreună am tras cea mai frumoasă carte: iubirea” */}
        <LoveStorySection />

        {/* Locația: Restaurantul Avegarden cu Waze & Google Maps */}
        <VenueSection />

        {/* Programul Zilei: De la cununie până la afterparty */}
        <TimelineSection />

        {/* Ghid Special pentru Oaspeții din Străinătate (Zboruri, Hoteluri, Transport, Sfaturi) */}
        <TravelGuideSection />

        {/* Dress Code: Black Tie Optional & Paletă de culori */}
        <DressCodeSection />

        {/* R.S.V.P. Interactiv cu Confetti & Bilet Virtual */}
        <RsvpSection />

        {/* Cartea de Oaspeți Digitală */}
        <GuestbookSection />

        {/* Întrebări Frecvente (FAQ) */}
        <FaqSection />
      </main>

      {/* Subsol Festiv */}
      <Footer />

      {/* Fereastră Modal pentru Previzualizarea Invitațiilor Fizice Originale */}
      <OriginalCardsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
