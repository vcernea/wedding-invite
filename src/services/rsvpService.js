import { rsvpConfig } from '../config/rsvpConfig';

/**
 * Salvează confirmarea RSVP:
 * 1. În localStorage (garantat local)
 * 2. În Firebase Firestore REST API (dacă este configurat projectId)
 * 3. În Google Sheets Webhook (dacă este configurat webhookUrl)
 */
export async function saveRsvp(formData) {
  const timestamp = new Date().toISOString();
  const payload = {
    ...formData,
    submittedAt: timestamp,
  };

  // 1. Salvare locală (backup garantat pe dispozitivul oaspetelui)
  try {
    localStorage.setItem('wedding_rsvp_alina_sergiu', JSON.stringify(formData));
    
    // De asemenea păstrăm un istoric local în caz de testare
    const existingListStr = localStorage.getItem('wedding_rsvps_all');
    const existingList = existingListStr ? JSON.parse(existingListStr) : [];
    existingList.push(payload);
    localStorage.setItem('wedding_rsvps_all', JSON.stringify(existingList));
  } catch (err) {
    console.warn('Eroare la salvarea în localStorage:', err);
  }

  const results = {
    localStorage: true,
    firebase: null,
    googleSheets: null,
  };

  // 2. Salvare în Firebase Firestore REST API
  const { projectId, apiKey, collection } = rsvpConfig.firebase;
  if (projectId) {
    try {
      const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collection}${apiKey ? `?key=${apiKey}` : ''}`;
      
      const firestoreBody = {
        fields: {
          fullName: { stringValue: formData.fullName || '' },
          emailOrPhone: { stringValue: formData.emailOrPhone || '' },
          attending: { stringValue: formData.attending || 'yes' },
          guestCount: { integerValue: parseInt(formData.guestCount || '1', 10) },
          childrenCount: { integerValue: parseInt(formData.childrenCount || '0', 10) },
          partnerName: { stringValue: formData.partnerName || '' },
          dietaryPreference: { stringValue: formData.dietaryPreference || 'standard' },
          dietaryDetails: { stringValue: formData.dietaryDetails || '' },
          wishes: { stringValue: formData.wishes || '' },
          submittedAt: { timestampValue: timestamp },
        },
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(firestoreBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Firebase save error:', response.status, errorText);
        results.firebase = false;
      } else {
        results.firebase = true;
      }
    } catch (err) {
      console.error('Eroare rețea la salvarea în Firebase:', err);
      results.firebase = false;
    }
  }

  // 3. Salvare în Google Sheets (Webhook)
  const { webhookUrl } = rsvpConfig.googleSheets;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors', // standard pentru Google Apps Script web apps
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      results.googleSheets = true;
    } catch (err) {
      console.error('Eroare rețea la salvarea în Google Sheets:', err);
      results.googleSheets = false;
    }
  }

  return { success: true, results };
}
