// Generator audio procedural romantic pentru atmosfera nunții
// Redă o armonie caldă de pian / harpă romantică (Canon în Re major / tema iubirii)

class RomanticAudioPlayer {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.timerId = null;
    this.masterGain = null;
    this.filter = null;
    this.volume = 0.35; // Nivel discret, cald
    this.activeNodes = new Set();
  }

  init() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContextClass();

      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);

      // Filtru cald trece-jos pentru un timbru moale de pian/harpă de cameră
      this.filter = this.audioCtx.createBiquadFilter();
      this.filter.type = "lowpass";
      this.filter.frequency.setValueAtTime(1400, this.audioCtx.currentTime);
      this.filter.Q.setValueAtTime(1.2, this.audioCtx.currentTime);

      this.filter.connect(this.masterGain);
      this.masterGain.connect(this.audioCtx.destination);
    }
  }

  playNote(freq, duration = 1.4, timeOffset = 0, velocity = 0.5) {
    if (!this.audioCtx || !this.isPlaying) return;

    const startTime = this.audioCtx.currentTime + timeOffset;

    // Oscilator principal
    const osc1 = this.audioCtx.createOscillator();
    osc1.type = "triangle";
    osc1.frequency.setValueAtTime(freq, startTime);

    // Oscilator secundar subtil
    const osc2 = this.audioCtx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(freq * 2, startTime);

    const noteGain = this.audioCtx.createGain();
    
    // Envelope pian: atac rapid, urmat de un decay natural
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

  start() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    if (this.masterGain) {
      this.masterGain.gain.cancelScheduledValues(this.audioCtx.currentTime);
      this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
    }

    // Chords and arpeggio notes
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
    const stepInterval = 650; // ms

    const scheduleNextMeasure = () => {
      if (!this.isPlaying) return;

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

  // Oprire INSTANTANEE a muzicii (fără întârziere sau note rămase în coadă)
  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }

    if (this.masterGain && this.audioCtx) {
      // Anulează instant orice volum programat și pune câștigul la 0
      this.masterGain.gain.cancelScheduledValues(this.audioCtx.currentTime);
      this.masterGain.gain.setValueAtTime(0, this.audioCtx.currentTime);
    }

    // Oprește imediat toți oscilatorii activi
    this.activeNodes.forEach((node) => {
      try {
        node.stop(0);
        node.disconnect();
      } catch (e) {}
    });
    this.activeNodes.clear();

    // Suspendă contextul audio pentru tăcere absolută garantată
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
    if (this.masterGain && this.audioCtx && this.isPlaying) {
      this.masterGain.gain.setValueAtTime(val, this.audioCtx.currentTime);
    }
  }
}

export const romanticAudio = new RomanticAudioPlayer();
