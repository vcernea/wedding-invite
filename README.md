# Invitație de Nuntă — Alina & Sergiu
### *„Împreună până la capătul cărților”* • 16 Iulie 2027 • Restaurantul Avegarden

O aplicație Single Page Application (SPA) de lux, dedicată în mod deosebit oaspeților din afara țării și celor apropiați, creată în armonie cu designul fizic al invitațiilor bazate pe **Asul de Inimă Roșie**.

---

## ✨ Caracteristici & Design Artistic

- **Fidelitate față de invitația fizică originală**:
  - Paletă de culori identică: *Burgundy Regal* (`#5c0d18`, `#741120`), *Crem Pergament* (`#FAF7F2`), *Roșu Carmin* (`#b81d24`) și accente aurii fine.
  - Tipografie nobilă: *Pinyon Script* și *Great Vibes* pentru caligrafia romantică („Sergiu & Alina”, „Avegarden”, „„DA” pentru totdeauna”, „Vă așteptăm cu drag!”), alături de *Cinzel* și *Cormorant Garamond* pentru textul solemn.
- **Cartea de Joc Interactivă 3D (Asul de Inimă)**:
  - Față: Asul de Inimă cu monograma caligrafică **S & A** încrustată în inima mare roșie.
  - Spate (3D Flip la atingere/click): Mesajul de suflet din pagina a doua a invitației fizice.
  - Efect de înclinare 3D dinamic (tilt) la deplasarea cursorului.
- **Numărătoare Inversă în Timp Real**:
  - 4 casete rotunjite burgundy (ZILE | ORE | MIN | SEC) care ticăie până pe **16 Iulie 2027, ora 18:00**.
  - Butoane rapide: *Adaugă în Google Calendar* și *Descarcă fișier .ics (Apple / Outlook)*.
- **Ghid dedicat Oaspeților din Afara Țării**:
  - **Zboruri & Aeroport**: Ghid Aeroportul Chișinău (RMO), companii aeriene, transfer.
  - **Cazare**: Recomandări de hoteluri (Radisson Blu, Courtyard by Marriott, Bristol, Vila Verde) cu distanțe și linkuri de rezervare.
  - **Transport Local**: Aplicații de taxi (iTaxi, Letz, Yandex Go), închirieri mașini, transfer de grup.
  - **Informații Practice**: Monedă & carduri (MDL), vremea de vară (28°C), prize europene, atracții (Cramele Cricova / Mileștii Mici).
- **Formular R.S.V.P. Complet & Interactiv**:
  - Confirmare prezență / absență cu părere de rău.
  - Număr de persoane, însoțitor, copii.
  - Meniu la alegere (Standard gourmet, vegetarian, vegan, fără gluten / alergii).
  - Suport cazare & transport pentru străinătate.
  - Melodie preferată pentru DJ și mesaj pentru miri.
  - Explozie festivă de confetti (`canvas-confetti`) la trimitere și generare de **Bilet Virtual de Invitat**.
  - Persistență locală prin `localStorage`.
- **Muzică Ambientală Romantică (Web Audio API)**:
  - Armonie romantică de pian / harpă (Canon în Re major) generată procedural, 100% autonomă (fără dependențe de rețea sau fișiere externe).
  - Buton elegant de Play/Pause cu bare de egalizator animate.
- **Cartea de Oaspeți Digitală**:
  - Oaspeții pot lăsa felicitări cu aprecieri (inimi) în timp real.
- **Întrebări Frecvente (FAQ)**:
  - Acordeon cu clarificări despre termenul limită (1 Mai 2027), copii, parcare privată, cadouri, alergii, buton direct WhatsApp.
- **Modal de Previzualizare a Invitațiilor Fizice**:
  - Oaspeții pot răsfoi fotografiile originale de înaltă rezoluție ale invitației tipărite.

---

## 🚀 Rulare & Dezvoltare

Proiectul este construit cu **React 19**, **Vite** și **Tailwind CSS v4**.

### 1. Instalare dependențe
```bash
npm install
```

### 2. Pornire server de dezvoltare
```bash
npm run dev
```

### 3. Compilare pentru producție
```bash
npm run build
```
Fișierele statice gata optimizate se vor genera în folderul `dist/`.

### 4. Testare build local
```bash
npm run preview
```

---

## ⚙️ Personalizare Date

Toate textele, datele, orele, hotelurile și întrebările frecvente pot fi editate direct în:
📂 `src/data/weddingDetails.js`

---

## 🌐 Rulare pe Server / Producție

Fiind o aplicație de tip SPA statică (HTML + CSS + JS), conținutul din `dist/` poate fi găzduit pe orice mediu:
- **Nginx / Apache**: copiați fișierele din `dist/` în root-ul serverului web.
- **Vercel / Netlify / Cloudflare Pages / GitHub Pages**: faceți push pe git și deploy printr-un singur click.
- **Docker**: rulați un container simplu `nginx:alpine` cu volumul mapat pe `dist/`.
