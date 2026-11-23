/**
 * Configurare pentru salvarea confirmărilor RSVP într-o bază de date externă privată.
 * 
 * Poți folosi:
 * 1. Firebase Cloud Firestore (Recomandat - Gratuit, securizat cu reguli de acces)
 * 2. Google Sheets Webhook (Alternativă rapidă pentru salvare directă în Google Sheets)
 * 
 * Datele pot fi setate direct aici sau prin variabile de mediu (.env):
 * VITE_FIREBASE_PROJECT_ID
 * VITE_FIREBASE_API_KEY
 * VITE_GOOGLE_SHEETS_WEBHOOK_URL
 */

export const rsvpConfig = {
  firebase: {
    // ID-ul proiectului tău Firebase (ex: "nunta-alina-sergiu")
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
    // Cheia API web Firebase (găsită în Project Settings > General)
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
    // Numele colecției în Firestore
    collection: 'rsvps',
  },
  googleSheets: {
    // Opțional: URL-ul Web App-ului din Google Apps Script
    webhookUrl: import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL || '',
  },
};
