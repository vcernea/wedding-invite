// Utilitare pentru adăugarea nunții în calendar (Google Calendar & fișier .ics pentru Apple/Outlook)
import { weddingDetails } from '../data/weddingDetails';

export function getGoogleCalendarUrl() {
  const title = encodeURIComponent(`Nunta ${weddingDetails.couple.bride} & ${weddingDetails.couple.groom}`);
  const details = encodeURIComponent(
    `Vă invităm la celebrarea iubirii noastre!\n\n` +
    `„${weddingDetails.couple.tagline}”\n\n` +
    `Locație: ${weddingDetails.event.venueName}, ${weddingDetails.event.venueAddress}\n` +
    `Ora: ${weddingDetails.event.timeDisplay}\n` +
    `Site & RSVP: ${window.location.origin}`
  );
  const location = encodeURIComponent(`${weddingDetails.event.venueName}, ${weddingDetails.event.venueAddress}, ${weddingDetails.event.venueCity}`);
  
  // 16 Iulie 2027, 18:00 EEST (UTC+3) -> 15:00 UTC
  // Până la 17 Iulie 2027, 05:00 EEST -> 02:00 UTC
  const startUtc = "20270716T150000Z";
  const endUtc = "20270717T020000Z";

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startUtc}/${endUtc}&details=${details}&location=${location}`;
}

export function downloadIcsFile() {
  const title = `Nunta ${weddingDetails.couple.bride} & ${weddingDetails.couple.groom}`;
  const description = `Vă invităm la celebrarea iubirii noastre! Alina & Sergiu - Restaurantul Avegarden`;
  const location = `${weddingDetails.event.venueName}, ${weddingDetails.event.venueAddress}, ${weddingDetails.event.venueCity}`;
  
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Alina si Sergiu//Nunta Noastra//RO",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    "DTSTART:20270716T150000Z",
    "DTEND:20270717T020000Z",
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "BEGIN:VALARM",
    "TRIGGER:-P1D",
    "ACTION:DISPLAY",
    `DESCRIPTION:Reminder: Nunta ${weddingDetails.couple.bride} & ${weddingDetails.couple.groom} este mâine!`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", "Nunta_Alina_si_Sergiu.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
