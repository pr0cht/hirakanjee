import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineSound,
  AiOutlineCustomerService,
  AiOutlineThunderbolt,
  AiOutlineArrowRight,
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlinePlayCircle,
} from 'react-icons/ai';
import { speakJapanese } from '../utils/audio';
import './ListenPage.css';

const SAMPLE_PHRASES = [
  { jp: 'こんにちは！日本語のリスニング練習を始めましょう。', en: "Hello! Let's begin Japanese listening practice." },
  { jp: 'すみません、東京駅へはどう行けばいいですか。', en: 'Excuse me, how can I get to Tokyo Station?' },
  { jp: '明日の天気は晴れのち雨でしょう。', en: "Tomorrow's weather will likely be sunny followed by rain." },
];

export default function ListenPage() {
  const [currentSampleIdx, setCurrentSampleIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeSample = SAMPLE_PHRASES[currentSampleIdx];

  const handleTestAudio = () => {
    setIsPlaying(true);
    speakJapanese(activeSample.jp);
    setTimeout(() => setIsPlaying(false), 2000);
  };

  const handleNextSample = () => {
    setCurrentSampleIdx((prev) => (prev + 1) % SAMPLE_PHRASES.length);
  };

  return (
    <div className="page-content listen-page-container">
      {/* Hero Banner */}
      <div className="listen-hero-card">
        <div className="listen-hero-badge">
          <AiOutlineCustomerService size={16} />
          <span>聴解 • Listening Studio</span>
        </div>
        <h1>Master Japanese Listening Comprehension</h1>
        <p>
          Immerse yourself in authentic speech rhythms, task-based audio dialogues, and targeted JLPT N5/N4 listening drills.
          Dedicated interactive listening suites are currently being built right here.
        </p>

        {/* Audio Test Box */}
        <div className="listen-hero-audio-tester">
          <div className="audio-tester-info">
            <div className="audio-tester-icon">
              <AiOutlineSound size={22} />
            </div>
            <div className="audio-tester-text">
              <div className="tester-label">Audio Engine Preview</div>
              <div className="tester-phrase">{activeSample.jp}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button
              type="button"
              className="tester-play-btn"
              onClick={handleTestAudio}
              aria-label="Play test audio"
            >
              <AiOutlinePlayCircle size={18} />
              <span>{isPlaying ? 'Playing...' : 'Play Audio'}</span>
            </button>
            <button
              type="button"
              className="btn-secondary-sm"
              onClick={handleNextSample}
              title="Next sample sentence"
            >
              Next Sample
            </button>
          </div>
        </div>
      </div>

      {/* Available Listening Modules in Curriculum */}
      <section className="listen-section">
        <div className="listen-section-header">
          <h2>Ready to Practice Now</h2>
          <p>These structured listening drills are already available within the JLPT curriculum:</p>
        </div>

        <div className="listen-grid">
          <div className="listen-card">
            <div className="listen-card-icon-wrap">
              <AiOutlineCustomerService size={24} />
            </div>
            <h3>JLPT N5 Listening Mastery</h3>
            <p>
              Interactive listening drills with contextual questions, full audio recordings, and multiple-choice comprehension challenges.
            </p>
            <span className="listen-card-badge active-badge">Available in N5</span>
            <Link to="/learn/n5/listening-n5-mastery" className="listen-card-btn">
              Start N5 Listening <AiOutlineArrowRight size={14} />
            </Link>
          </div>

          <div className="listen-card">
            <div className="listen-card-icon-wrap">
              <AiOutlineSound size={24} />
            </div>
            <h3>JLPT N4 Listening Module 1</h3>
            <p>
              Targeted listening comprehension drills covering lessons 01-10 with native speaker recordings and key vocabulary checks.
            </p>
            <span className="listen-card-badge active-badge">Available in N4</span>
            <Link to="/learn/n4/n4-listening-module-1" className="listen-card-btn">
              Start N4 Drills No. 1-10 <AiOutlineArrowRight size={14} />
            </Link>
          </div>

          <div className="listen-card">
            <div className="listen-card-icon-wrap">
              <AiOutlineThunderbolt size={24} />
            </div>
            <h3>JLPT N4 Listening Module 2</h3>
            <p>
              Situational task questions covering lessons 11-20: train announcements, shopping requests, and casual conversations.
            </p>
            <span className="listen-card-badge active-badge">Available in N4</span>
            <Link to="/learn/n4/n4-listening-module-2" className="listen-card-btn">
              Start N4 Drills No. 11-20 <AiOutlineArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Studio Features */}
      <section className="listen-section">
        <div className="listen-section-header">
          <h2>Upcoming Listening Hub Features</h2>
          <p>We are consolidating all listening exercises into this dedicated studio:</p>
        </div>

        <div className="listen-grid">
          <div className="listen-card">
            <div className="listen-card-icon-wrap" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
              <AiOutlineClockCircle size={24} />
            </div>
            <h3>Variable Speed Control</h3>
            <p>
              Adjust playback speeds (0.75x slow for beginners, 1.0x natural, 1.25x rapid) with pitch correction to hone your ear.
            </p>
            <span className="listen-card-badge upcoming-badge">In Development</span>
          </div>

          <div className="listen-card">
            <div className="listen-card-icon-wrap" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
              <AiOutlineCheckCircle size={24} />
            </div>
            <h3>Audio Dictation & Canvas Integration</h3>
            <p>
              Listen to native Japanese audio and draw the corresponding Kanji or Hiragana directly on the practice pad.
            </p>
            <span className="listen-card-badge upcoming-badge">In Development</span>
          </div>

          <div className="listen-card">
            <div className="listen-card-icon-wrap" style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#16a34a' }}>
              <AiOutlineCustomerService size={24} />
            </div>
            <h3>Shadowing Mode</h3>
            <p>
              Synchronized karaoke-style highlighted subtitles for real-time speech shadowing and pronunciation calibration.
            </p>
            <span className="listen-card-badge upcoming-badge">In Development</span>
          </div>
        </div>
      </section>
    </div>
  );
}
