// Datele oficiale ale evenimentului - Alina & Sergiu
export const weddingDetails = {
  couple: {
    bride: "Alina",
    groom: "Sergiu",
    monogram: "S & A",
    fullNameText: "Sergiu & Alina",
    quoteHeader: "ÎMPREUNĂ PÂNĂ LA CĂPĂTUL CĂRȚILOR",
    tagline: "Împreună am tras cea mai frumoasă carte: iubirea.",
    subtagline: "Acum vă invităm să fiți martorii momentului în care vom spune",
    daQuote: "„DA” pentru totdeauna",
    farewell: "Vă așteptăm cu drag!"
  },
  
  event: {
    // 16 Iulie 2027, ora 18:00
    dateString: "16 | 07 | 2027",
    fullDateDisplay: "Vineri, 16 Iulie 2027",
    timeDisplay: "ora 18:00",
    targetDateISO: "2027-07-16T18:00:00+03:00",
    venueName: "Restaurantul Avegarden",
    venueAddress: "Strada Socoleni 5/3, Chișinău",
    venueCity: "Chișinău, Republica Moldova",
    mapQuery: "Avegarden, Strada Socoleni 5/3, Chisinau",
    googleMapsUrl: "https://maps.google.com/?q=Avegarden+Chisinau",
    wazeUrl: "https://waze.com/ul?q=Avegarden+Chisinau",
    contactPhone: "+373 60 123 456", // placeholder facil de înlocuit
    contactEmail: "nunta.alina.sergiu@gmail.com",
    rsvpDeadline: "1 Mai 2027"
  },

  // Povestea celor doi (tematică cărți de joc & as de inimă)
  story: {
    title: "Chinta Roială a Iubirii Noastre",
    subtitle: "Cum s-au împărțit cărțile destinului",
    paragraphs: [
      "În jocul vieții, fiecare decizie este o carte trasă. Uneori joci la siguranță, alteori riști totul. Pentru noi, momentul în care privirile noastre s-au întâlnit pentru prima oară a fost mâna câștigătoare — acel «All-in» pe care l-am făcut fără nicio ezitare.",
      "De-a lungul anilor, am adunat zâmbete, călătorii, îmbrățișări în aeroporturi și mii de kilometri parcurși unul către celălalt. Am învățat că cel mai puternic as din pachet nu este norocul, ci dragostea care alege să rămână fidelă zi de zi.",
      "Pe 16 Iulie 2027, așezăm pe masă cea mai prețioasă carte: legământul nostru pentru totdeauna. Iar bucuria noastră este completă doar avându-vă alături, indiferent de la câte zboruri sau mări distanță veniți."
    ],
    highlights: [
      { number: "01", suit: "♥", title: "Prima Privire", desc: "Momentul în care am știut amândoi că jocul abia începe." },
      { number: "02", suit: "♦", title: "Călătoriile", desc: "Mii de kilometri și fusuri orare traversate pentru un singur zâmbet." },
      { number: "03", suit: "♣", title: "Marele «DA»", desc: "Cererea în căsătorie — cea mai firească alegere a sufletelor noastre." },
      { number: "04", suit: "♠", title: "Nunta Noastră", desc: "16 Iulie 2027: Împreună până la capătul cărților." }
    ]
  },

  // Programul zilei
  timeline: [
    {
      time: "16:00",
      title: "Cununia Religioasă",
      location: "Biserica Sfântul Nicolae (Centru)",
      description: "Binecuvântarea iubirii noastre în fața divinității și a celor dragi.",
      icon: "Church",
      badge: "Solemnitate & Emoție"
    },
    {
      time: "18:00",
      title: "Sosirea Oaspeților & Welcome Cocktails",
      location: "Grădina Avegarden",
      description: "Șampanie fină, muzică live de chitară/saxofon și revederi emoționante.",
      icon: "Wine",
      badge: "Ora Oficială de Întâlnire"
    },
    {
      time: "19:30",
      title: "Dansul Mirilor: Asul de Inimă",
      location: "Salonul Mare Avegarden",
      description: "Primul nostru dans ca soț și soție, sub o ploaie de lumini calde.",
      icon: "Music",
      badge: "Moment Magic"
    },
    {
      time: "20:00",
      title: "Cina Festivă & Deschiderea Petrecerii",
      location: "Salonul Mare Avegarden",
      description: "Meniu gastronomic ales, vinuri nobile și atmosferă electrizantă cu trupa live.",
      icon: "Utensils",
      badge: "Gastronomie & Tradiție"
    },
    {
      time: "23:30",
      title: "Tortul Mirilor & Focuri de Artificii",
      location: "Terasa Avegarden",
      description: "Dulceața iubirii noastre celebrată sub cerul înstelat de iulie.",
      icon: "Cake",
      badge: "Climax Dulce"
    },
    {
      time: "00:00 - În zori",
      title: "Afterparty: All-In până dimineață!",
      location: "Ringul de dans Avegarden",
      description: "DJ set, hituri internaționale și dans fără oprire până răsare soarele.",
      icon: "PartyPopper",
      badge: "Energie Pură"
    }
  ],

  // Ghid complet pentru oaspeții veniți din străinătate
  travelGuide: {
    heroNotice: "Dragi prieteni și rude de departe, știm că traversați granițe pentru noi. Prezența voastră este cel mai frumos cadou!",
    airport: {
      name: "Aeroportul Internațional Chișinău (RMO)",
      code: "RMO",
      distanceToVenue: "Aprox. 22 km (~30 minute cu taxiul/transferul)",
      airlines: ["TAROM", "HiSky", "FlyOne", "Austrian Airlines", "Lufthansa", "Turkish Airlines", "Wizz Air"],
      tips: "Vă recomandăm să rezervați zborul din timp (iunie-iulie este sezon plin). La ieșirea din terminal puteți comanda taxi direct prin aplicațiile locale la tarif fix."
    },
    localTransport: [
      {
        name: "Aplicații Taxi Locale",
        description: "Comandă direct de pe telefon cu plată cu cardul sau numerar.",
        apps: ["iTaxi", "Letz", "Yandex Go"]
      },
      {
        name: "Închirieri Auto (Rent-a-car)",
        description: "Disponibile direct la aeroport (Sixt, Europcar, companii locale de încredere)."
      },
      {
        name: "Transfer Asigurat",
        description: "Dacă sosiți într-un grup sau aveți nevoie de ajutor la transfer, anunțați-ne prin formularul RSVP!"
      }
    ],
    hotels: [
      {
        name: "Radisson Blu Leogrand Hotel (5 stele)",
        location: "Centrul Chișinăului (str. Mitropolit Varlaam 77)",
        distance: "15 min de Avegarden (8.5 km)",
        description: "Confort premium internațional, spa, mic dejun excelent și acces facil la toate atracțiile centrale.",
        bookingUrl: "https://www.booking.com/hotel/md/radisson-blu-leogrand.html",
        badge: "Recomandare Lux"
      },
      {
        name: "Courtyard by Marriott Chișinău (4 stele)",
        location: "Bulevardul Dimitrie Cantemir 21/1",
        distance: "12 min de Avegarden (7.2 km)",
        description: "Camere moderne, conexiuni rapide către local și centru comercial alăturat (Shopping Malldova).",
        bookingUrl: "https://www.booking.com/hotel/md/courtyard-by-marriott-chisinau.html",
        badge: "Modern & Confortabil"
      },
      {
        name: "Boutique Hotel Bristol (4 stele)",
        location: "Str. Pușkin 32, Centru Istoric",
        distance: "14 min de Avegarden",
        description: "Atmosferă elegantă, situat chiar pe pietonala din inima capitalei.",
        bookingUrl: "https://www.booking.com/hotel/md/bristol-central-park.html",
        badge: "Farmec Central"
      },
      {
        name: "Vila Verde Hotel (3 stele)",
        location: "Strada Grenoble 110",
        distance: "20 min de Avegarden",
        description: "Opțiune cochetă, liniștită și accesibilă pentru șederi mai lungi.",
        bookingUrl: "https://www.booking.com/hotel/md/vila-verde.html",
        badge: "Excelent Raport Calitate/Preț"
      }
    ],
    practicalInfo: [
      {
        title: "Monedă & Plăți",
        detail: "Moneda locală este Leul Moldovenesc (MDL). Cardurile Visa și Mastercard sunt acceptate peste tot (restaurante, supermarketuri, taxi). Nu este nevoie să schimbați sume mari în numerar."
      },
      {
        title: "Vremea în Iulie",
        detail: "Verile în Chișinău sunt călduroase și luminoase, cu temperaturi de 27°C - 31°C ziua și seri foarte plăcute de 19°C - 22°C. Restaurantul dispune de climatizare performantă și grădină de vară."
      },
      {
        title: "Prize & Electricitate",
        detail: "Tensiune 230V, 50Hz, prize standard europene (Tip C și F). Nu este necesar adaptor dacă veniți din Uniunea Europeană sau Marea Britanie (cu adaptor UE clasic)."
      },
      {
        title: "Ce să vizitați dacă stați câteva zile",
        detail: "Galeriile subterane și cramele Cricova sau Mileștii Mici (cea mai mare colecție de vinuri din lume din Cartea Recordurilor!), Parcul Valea Morilor și Centrul Istoric."
      }
    ]
  },

  // Codul vestimentar (Dress Code)
  dressCode: {
    style: "Black Tie Optional & Cocktail Glamour",
    description: "Ne dorim o seară elegantă, strălucitoare și plină de stil. Bărbații pot alege costum clasic sau smoking, iar doamnele rochii de seară lungi sau cocktail midi elegante.",
    colorPalette: [
      { name: "Burgundy Velvet", hex: "#6b0f1a", note: "Culoarea semnătură a nunții noastre" },
      { name: "Champagne / Auriu Cald", hex: "#d4af37", note: "Accente strălucitoare și festive" },
      { name: "Rose Pudrat", hex: "#d8a4a8", note: "Tonuri romantice și delicate" },
      { name: "Midnight Navy", hex: "#1e293b", note: "Eleganță sobră și rafinată" },
      { name: "Verde Smarald", hex: "#1e3a2f", note: "Nuanțe nobile de seară" }
    ],
    brideNote: "O rugăminte cu zâmbetul pe buze: vă rugăm să păstrați albul imaculat exclusiv pentru mireasă."
  },

  // Întrebări Frecvente (FAQ)
  faq: [
    {
      q: "Până la ce dată trebuie să confirm prezența?",
      a: "Vă rugăm cu drag să ne confirmați prezența până la data de 1 Mai 2027. Acest termen ne permite să definitivăm aranjamentele pentru mese, meniul personalizat și să vă oferim asistență pentru cazare."
    },
    {
      q: "Călătoresc din străinătate și nu cunosc orașul. Mă puteți ajuta cu cazarea sau transportul?",
      a: "Absolut! În formularul RSVP de mai jos există o secțiune dedicată oaspeților din afara țării. Bifați opțiunea respectivă și vă vom contacta personal pentru a vă ajuta cu recomandări, rezervări sau transfer de la aeroport."
    },
    {
      q: "Putem veni însoțiți de copii?",
      a: "Copiii sunt o bucurie! Vă rugăm doar să specificați numărul lor în formularul de confirmare, pentru a le pregăti meniuri speciale pentru cei mici și locuri confortabile."
    },
    {
      q: "Există parcare la Restaurantul Avegarden?",
      a: "Da, locația oferă parcare privată, generoasă și securizată, gratuită pentru toți invitații pe durata întregului eveniment."
    },
    {
      q: "Cum putem proceda cu darul dacă venim cu avionul și bagaj de mână?",
      a: "Cea mai mare bucurie pentru noi este simpla voastră prezență și efortul de a fi alături de noi! Pentru cei care călătoresc doar cu bagaj de mână și doresc detalii organizatorice, ne puteți scrie direct pe WhatsApp sau vom pune la dispoziție o cutie specială de plicuri direct la intrarea în salon."
    },
    {
      q: "Meniul poate fi adaptat pentru alergii sau vegetarieni?",
      a: "Da, bucătarii restaurantului Avegarden pregătesc variante delicioase pentru meniuri vegetariene, vegane, fără gluten sau fără alergeni specifici. Doar notați acest lucru în câmpul de preferințe din formularul RSVP."
    }
  ]
};
