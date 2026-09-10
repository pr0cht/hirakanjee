import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineReload, AiOutlineSound, AiOutlineCheckCircle } from 'react-icons/ai';
import DrawingCanvas from './DrawingCanvas';
import { kanjiN5Data } from '../data/kanjiN5Data';
import { speakJapanese } from '../utils/audio';
import { sfx } from '../utils/sfx';

const hiraganaList = [
  { char: 'あ', romaji: 'a', strokes: 3, script: 'hiragana' },
  { char: 'い', romaji: 'i', strokes: 2, script: 'hiragana' },
  { char: 'う', romaji: 'u', strokes: 2, script: 'hiragana' },
  { char: 'え', romaji: 'e', strokes: 2, script: 'hiragana' },
  { char: 'お', romaji: 'o', strokes: 3, script: 'hiragana' },
  { char: 'か', romaji: 'ka', strokes: 3, script: 'hiragana' },
  { char: 'き', romaji: 'ki', strokes: 4, script: 'hiragana' },
  { char: 'く', romaji: 'ku', strokes: 1, script: 'hiragana' },
  { char: 'け', romaji: 'ke', strokes: 3, script: 'hiragana' },
  { char: 'こ', romaji: 'ko', strokes: 2, script: 'hiragana' },
  { char: 'さ', romaji: 'sa', strokes: 3, script: 'hiragana' },
  { char: 'し', romaji: 'shi', strokes: 1, script: 'hiragana' },
  { char: 'す', romaji: 'su', strokes: 2, script: 'hiragana' },
  { char: 'せ', romaji: 'se', strokes: 3, script: 'hiragana' },
  { char: 'そ', romaji: 'so', strokes: 1, script: 'hiragana' },
  { char: 'た', romaji: 'ta', strokes: 4, script: 'hiragana' },
  { char: 'ち', romaji: 'chi', strokes: 2, script: 'hiragana' },
  { char: 'つ', romaji: 'tsu', strokes: 1, script: 'hiragana' },
  { char: 'て', romaji: 'te', strokes: 1, script: 'hiragana' },
  { char: 'と', romaji: 'to', strokes: 2, script: 'hiragana' },
  { char: 'な', romaji: 'na', strokes: 4, script: 'hiragana' },
  { char: 'に', romaji: 'ni', strokes: 3, script: 'hiragana' },
  { char: 'ぬ', romaji: 'nu', strokes: 2, script: 'hiragana' },
  { char: 'ね', romaji: 'ne', strokes: 2, script: 'hiragana' },
  { char: 'の', romaji: 'no', strokes: 1, script: 'hiragana' },
  { char: 'は', romaji: 'ha', strokes: 3, script: 'hiragana' },
  { char: 'ひ', romaji: 'hi', strokes: 1, script: 'hiragana' },
  { char: 'ふ', romaji: 'fu', strokes: 4, script: 'hiragana' },
  { char: 'へ', romaji: 'he', strokes: 1, script: 'hiragana' },
  { char: 'ほ', romaji: 'ho', strokes: 4, script: 'hiragana' },
  { char: 'ま', romaji: 'ma', strokes: 3, script: 'hiragana' },
  { char: 'み', romaji: 'mi', strokes: 2, script: 'hiragana' },
  { char: 'む', romaji: 'mu', strokes: 3, script: 'hiragana' },
  { char: 'め', romaji: 'me', strokes: 2, script: 'hiragana' },
  { char: 'も', romaji: 'mo', strokes: 3, script: 'hiragana' },
  { char: 'や', romaji: 'ya', strokes: 3, script: 'hiragana' },
  { char: 'ゆ', romaji: 'yu', strokes: 2, script: 'hiragana' },
  { char: 'よ', romaji: 'yo', strokes: 2, script: 'hiragana' },
  { char: 'ら', romaji: 'ra', strokes: 2, script: 'hiragana' },
  { char: 'り', romaji: 'ri', strokes: 2, script: 'hiragana' },
  { char: 'る', romaji: 'ru', strokes: 1, script: 'hiragana' },
  { char: 'れ', romaji: 're', strokes: 2, script: 'hiragana' },
  { char: 'ろ', romaji: 'ro', strokes: 1, script: 'hiragana' },
  { char: 'わ', romaji: 'wa', strokes: 2, script: 'hiragana' },
  { char: 'を', romaji: 'wo', strokes: 3, script: 'hiragana' },
  { char: 'ん', romaji: 'n', strokes: 1, script: 'hiragana' },
];

const kanjiList = kanjiN5Data.map((k) => ({
  char: k.char,
  romaji: k.meaning,
  strokes: k.strokes,
  script: 'kanji',
  meaning: k.meaning,
  onyomi: k.onyomi,
  kunyomi: k.kunyomi,
}));

export default function KanjiDrawingPad({ defaultScript = 'hiragana' }) {
  const [selectedScript, setSelectedScript] = useState(() => {
    if (defaultScript === 'kanji') return 'kanji';
    if (defaultScript === 'hiragana') return 'hiragana';
    return 'all';
  });
  const [showWatermark, setShowWatermark] = useState(true);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [advanceNotice, setAdvanceNotice] = useState(null);
  const advanceTimerRef = useRef(null);

  const getCombinedPool = (scriptOverride = selectedScript) => {
    if (scriptOverride === 'hiragana') return hiraganaList;
    if (scriptOverride === 'kanji') return kanjiList;
    return [...hiraganaList, ...kanjiList];
  };

  const [target, setTarget] = useState(() => {
    if (defaultScript === 'kanji') return kanjiList[0];
    return hiraganaList[0];
  });

  const pickNextCharacter = (scriptOverride = selectedScript) => {
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    setAdvanceNotice(null);

    const pool = getCombinedPool(scriptOverride);
    if (pool.length <= 1) return;
    const remaining = pool.filter((c) => c.char !== target.char);
    const next = remaining[Math.floor(Math.random() * remaining.length)] || pool[0];
    setTarget(next);
  };

  const handleGradeComplete = (gradeData) => {
    const isGood = gradeData.isCorrect || gradeData.score >= 70;
    if (isGood) {
      sfx.playCorrect();
      if (autoAdvance) {
        setAdvanceNotice(`Great job (${Math.round(gradeData.score)}%)! Moving to next character...`);
        if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
        advanceTimerRef.current = setTimeout(() => {
          pickNextCharacter();
        }, 1400);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, []);

  return (
    <div style={{ maxWidth: '420px', margin: '0 auto', padding: '1rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            className={`category-tab ${selectedScript === 'all' ? 'active' : ''}`}
            onClick={() => {
              setSelectedScript('all');
              pickNextCharacter('all');
            }}
          >
            All
          </button>
          <button
            className={`category-tab ${selectedScript === 'hiragana' ? 'active' : ''}`}
            onClick={() => {
              setSelectedScript('hiragana');
              pickNextCharacter('hiragana');
            }}
          >
            Hiragana
          </button>
          <button
            className={`category-tab ${selectedScript === 'kanji' ? 'active' : ''}`}
            onClick={() => {
              setSelectedScript('kanji');
              pickNextCharacter('kanji');
            }}
          >
            Kanji
          </button>
        </div>

        <button
          onClick={() => pickNextCharacter()}
          title="Pick next character"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'none',
            border: '1px solid var(--border-color, #d1d5db)',
            color: 'var(--text-primary, #111827)',
            borderRadius: '6px',
            padding: '4px 8px',
            cursor: 'pointer',
            fontSize: '0.85rem',
          }}
        >
          <AiOutlineReload size={14} />
          Next
        </button>
      </div>

      <div
        style={{
          background: 'var(--bg-card, #ffffff)',
          padding: '1rem',
          borderRadius: '12px',
          border: '1px solid var(--border-color, rgba(0,0,0,0.06))',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--text-primary, #111827)' }}>
            Write: {target.char}
          </h2>
          <button
            onClick={() => speakJapanese(target.kunyomi?.split(',')[0] || target.char)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#3b82f6' }}
            title={`Pronounce ${target.char}`}
          >
            <AiOutlineSound size={20} />
          </button>
        </div>

        <p style={{ margin: '4px 0 0', color: 'var(--text-muted, #6b7280)', fontSize: '0.95rem' }}>
          {target.meaning ? `${target.meaning} (${target.romaji})` : target.romaji}
        </p>

        {target.onyomi && (
          <div style={{ fontSize: '0.8rem', color: 'var(--text-dim, #9ca3af)', marginTop: '4px' }}>
            音: {target.onyomi} | 訓: {target.kunyomi}
          </div>
        )}

        <div
          style={{
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <label style={{ fontSize: '0.82rem', color: 'var(--text-secondary, #4b5563)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={showWatermark}
              onChange={(e) => setShowWatermark(e.target.checked)}
              style={{ marginRight: '6px' }}
            />
            Guide trace watermark
          </label>
          <label style={{ fontSize: '0.82rem', color: 'var(--text-secondary, #4b5563)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={autoAdvance}
              onChange={(e) => setAutoAdvance(e.target.checked)}
              style={{ marginRight: '6px' }}
            />
            Auto-advance on pass
          </label>
        </div>

        {advanceNotice && (
          <div
            style={{
              marginTop: '10px',
              padding: '8px 12px',
              borderRadius: '8px',
              background: 'rgba(34, 197, 94, 0.12)',
              color: '#16a34a',
              border: '1px solid rgba(34, 197, 94, 0.25)',
              fontSize: '0.86rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <AiOutlineCheckCircle size={16} />
            <span>{advanceNotice}</span>
          </div>
        )}
      </div>

      <DrawingCanvas
        key={`${target.char}-${target.script}`}
        targetChar={target.char}
        overlayChar={showWatermark ? target.char : null}
        expectedStrokes={target.strokes}
        script={target.script}
        onGradeComplete={handleGradeComplete}
        autoRecordSRS={true}
      />
    </div>
  );
}
