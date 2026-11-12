// Player audio hibrid pentru nunta Alina & Sergiu:
// 1. Încearcă să redea fișierul audio real (ex: Andra - Pas cu Pas din public/audio/andra-pas-cu-pas.mp3)
// 2. Dacă fișierul nu este încă adăugat, rulează automat armonia caldă procedurală de pian/harpă (Canon în Re)
// 3. Oferă oprire / pornire instantanee fără delay sau suprapuneri.

class RomanticAudioPlayer {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.timerId = null;
    this.masterGain = null;
    this.filter = null;
    this.volume = 0.35;
    this.activeNodes = new Set();

    // Suport pentru fișier MP3
    this.audioElement = null;
    this.useMp3 = false;
    this.initAudioElement();
  }

  initAudioElement() {
    try {
      if (typeof window !== 'undefined') {
        const basePath = import.meta.env.BASE_URL || '/';
        const cleanBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
        const audioSrc = `${cleanBase}audio/andra-pas-cu-pas.mp3`;

        this.audioElement = new Audio(audioSrc);
        this.audioElement.loop = true;
        this.audioElement.volume = 0.6;
        this.audioElement.preload = 'auto';

        // Detectăm dacă fișierul există și se poate reda
        this.audioElement.addEventListener('canplaythrough', () => {
          this.useMp3 = true;
        });
      }
    } catch (e) {
      console.warn("Audio element init:", e);
    }
  }

  initSynth() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContextClass();

      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);

      this.filter = this.audioCtx.createBiquadFilter();
      this.filter.type = "lowpass";
      this.filter.frequency.setValueAtTime(1400, this.audioCtx.currentTime);
      this.filter.Q.setValueAtTime(1.2, this.audioCtx.currentTime);

      this.filter.connect(this.masterGain);
      this.masterGain.connect(this.audioCtx.destination);
    }
  }

  playNote(freq, duration = 1.4, timeOffset = 0, velocity = 0.5) {
    if (!this.audioCtx || !this.isPlaying || this.useMp3) return;

    const startTime = this.audioCtx.currentTime + timeOffset;

    const osc1 = this.audioCtx.createOscillator();
    osc1.type = "triangle";
    osc1.frequency.setValueAtTime(freq, startTime);

    const osc2 = this.audioCtx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(freq * 2, startTime);

    const noteGain = this.audioCtx.createGain();
    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.exponentialRampToValueAtTime(velocity, startTime + 0.04);
    noteGain.gain.exponentialRampToValueAtTime(velocity * 0.4, startTime + 0.3);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc1.connect(noteGain);
    osc2.connect(noteGain);
    noteGain.connect(this.filter);

    this.activeNodes.add(osc1);
    this.activeNodes.add(osc2);

    const cleanup = () => {
      this.activeNodes.delete(osc1);
      this.activeNodes.delete(osc2);
    };

    osc1.onended = cleanup;

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration + 0.05);
    osc2.stop(startTime + duration + 0.05);
  }

  startSynth() {
    this.initSynth();
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    if (this.masterGain) {
      this.masterGain.gain.cancelScheduledValues(this.audioCtx.currentTime);
      this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
    }

    const chordProgressions = [
      { bass: 146.83, arpeggio: [293.66, 369.99, 440.00, 587.33] },
      { bass: 110.00, arpeggio: [220.00, 277.18, 329.63, 440.00] },
      { bass: 123.47, arpeggio: [246.94, 293.66, 369.99, 493.88] },
      { bass: 92.50, arpeggio: [185.00, 220.00, 277.18, 369.99] },
      { bass: 98.00, arpeggio: [196.00, 246.94, 293.66, 392.00] },
      { bass: 146.83, arpeggio: [220.00, 293.66, 369.99, 440.00] },
      { bass: 98.00, arpeggio: [196.00, 246.94, 293.66, 392.00] },
      { bass: 110.00, arpeggio: [220.00, 277.18, 329.63, 440.00] }
    ];

    let chordIndex = 0;
    const stepInterval = 650;

    const scheduleNextMeasure = () => {
      if (!this.isPlaying || this.useMp3) return;

      const current = chordProgressions[chordIndex];
      this.playNote(current.bass, 2.5, 0, 0.4);

      current.arpeggio.forEach((noteFreq, idx) => {
        const offset = (idx * stepInterval) / 1000;
        this.playNote(noteFreq, 1.8, offset, 0.28);
      });

      chordIndex = (chordIndex + 1) % chordProgressions.length;
      this.timerId = setTimeout(scheduleNextMeasure, current.arpeggio.length * stepInterval);
    };

    scheduleNextMeasure();
  }

  start() {
    if (this.isPlaying) return;
    this.isPlaying = true;

    // 1. Încercăm redarea MP3
    if (this.audioElement) {
      const playPromise = this.audioElement.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.useMp3 = true;
          })
          .catch(() => {
            // Dacă MP3-ul nu este găsit (404) sau utilizatorul nu a adăugat fișierul,
            // folosim sintetizatorul procedural
            this.useMp3 = false;
            this.startSynth();
          });
        return;
      }
    }

    // 2. Fallback dacă nu avem audio element
    this.startSynth();
  }

  // Oprire instantanee
  stop() {
    this.isPlaying = false;

    // Oprim MP3-ul dacă rula
    if (this.audioElement) {
      try {
        this.audioElement.pause();
      } catch (e) {}
    }

    // Oprim sintetizatorul procedural
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }

    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.cancelScheduledValues(this.audioCtx.currentTime);
      this.masterGain.gain.setValueAtTime(0, this.audioCtx.currentTime);
    }

    this.activeNodes.forEach((node) => {
      try {
        node.stop(0);
        node.disconnect();
      } catch (e) {}
    });
    this.activeNodes.clear();

    if (this.audioCtx && this.audioCtx.state === 'running') {
      this.audioCtx.suspend();
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  setVolume(val) {
    this.volume = val;
    if (this.audioElement) {
      this.audioElement.volume = Math.min(1, Math.max(0, val * 1.5));
    }
    if (this.masterGain && this.audioCtx && this.isPlaying) {
      this.masterGain.gain.setValueAtTime(val, this.audioCtx.currentTime);
    }
  }
}

export const romanticAudio = new RomanticAudioPlayer();
