/**
 * Japanese Speech Synthesis Audio Utility
 * Provides native Japanese audio pronunciation for characters, words, and sentences.
 */

class JapaneseAudioPlayer {
  constructor() {
    this.voice = null;
    this.isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;
    if (this.isSupported) {
      this.initVoice();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => this.initVoice();
      }
    }
  }

  initVoice() {
    if (!this.isSupported) return;
    const voices = window.speechSynthesis.getVoices();
    // Prioritize natural or native Japanese voices (ja-JP)
    this.voice =
      voices.find((v) => v.lang.toLowerCase() === 'ja-jp' && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Kyoko') || v.name.includes('Otoya'))) ||
      voices.find((v) => v.lang.toLowerCase() === 'ja-jp' || v.lang.toLowerCase().startsWith('ja')) ||
      null;
  }

  speak(text, options = {}) {
    if (!this.isSupported || !text) return;

    try {
      window.speechSynthesis.cancel(); // Stop any currently playing audio

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      if (this.voice) {
        utterance.voice = this.voice;
      }
      utterance.rate = options.rate || 0.85; // Slightly slower for language learners
      utterance.pitch = options.pitch || 1.0;

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn('Speech synthesis failed:', err);
    }
  }

  stop() {
    if (this.isSupported) {
      window.speechSynthesis.cancel();
    }
  }
}

export const japaneseAudio = new JapaneseAudioPlayer();
export const speakJapanese = (text, options) => japaneseAudio.speak(text, options);
