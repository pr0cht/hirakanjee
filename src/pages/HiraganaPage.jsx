import React from 'react';
import ScriptGrid from '../components/ScriptGrid';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const basic = [
  { char: 'あ', romaji: 'a' },{ char: 'い', romaji: 'i' },{ char: 'う', romaji: 'u' },{ char: 'え', romaji: 'e' },{ char: 'お', romaji: 'o' },
  { char: 'か', romaji: 'ka' },{ char: 'き', romaji: 'ki' },{ char: 'く', romaji: 'ku' },{ char: 'け', romaji: 'ke' },{ char: 'こ', romaji: 'ko' },
  { char: 'さ', romaji: 'sa' },{ char: 'し', romaji: 'shi' },{ char: 'す', romaji: 'su' },{ char: 'せ', romaji: 'se' },{ char: 'そ', romaji: 'so' },
  { char: 'た', romaji: 'ta' },{ char: 'ち', romaji: 'chi' },{ char: 'つ', romaji: 'tsu' },{ char: 'て', romaji: 'te' },{ char: 'と', romaji: 'to' },
  { char: 'な', romaji: 'na' },{ char: 'に', romaji: 'ni' },{ char: 'ぬ', romaji: 'nu' },{ char: 'ね', romaji: 'ne' },{ char: 'の', romaji: 'no' },
  { char: 'は', romaji: 'ha' },{ char: 'ひ', romaji: 'hi' },{ char: 'ふ', romaji: 'fu' },{ char: 'へ', romaji: 'he' },{ char: 'ほ', romaji: 'ho' },
  { char: 'ま', romaji: 'ma' },{ char: 'み', romaji: 'mi' },{ char: 'む', romaji: 'mu' },{ char: 'め', romaji: 'me' },{ char: 'も', romaji: 'mo' },
  { char: 'や', romaji: 'ya' },{ char: 'ゆ', romaji: 'yu' },{ char: 'よ', romaji: 'yo' },
  { char: 'ら', romaji: 'ra' },{ char: 'り', romaji: 'ri' },{ char: 'る', romaji: 'ru' },{ char: 'れ', romaji: 're' },{ char: 'ろ', romaji: 'ro' },
  { char: 'わ', romaji: 'wa' },{ char: 'を', romaji: 'wo' },{ char: 'ん', romaji: 'n' },
];

const dakuon = [
  { char: 'が', romaji: 'ga' },{ char: 'ぎ', romaji: 'gi' },{ char: 'ぐ', romaji: 'gu' },{ char: 'げ', romaji: 'ge' },{ char: 'ご', romaji: 'go' },
  { char: 'ざ', romaji: 'za' },{ char: 'じ', romaji: 'ji' },{ char: 'ず', romaji: 'zu' },{ char: 'ぜ', romaji: 'ze' },{ char: 'ぞ', romaji: 'zo' },
  { char: 'だ', romaji: 'da' },{ char: 'ぢ', romaji: 'di' },{ char: 'づ', romaji: 'du' },{ char: 'で', romaji: 'de' },{ char: 'ど', romaji: 'do' },
  { char: 'ば', romaji: 'ba' },{ char: 'び', romaji: 'bi' },{ char: 'ぶ', romaji: 'bu' },{ char: 'べ', romaji: 'be' },{ char: 'ぼ', romaji: 'bo' },
  { char: 'ぱ', romaji: 'pa' },{ char: 'ぴ', romaji: 'pi' },{ char: 'ぷ', romaji: 'pu' },{ char: 'ぺ', romaji: 'pe' },{ char: 'ぽ', romaji: 'po' },
];

const combo = [
  { char: 'きゃ', romaji: 'kya' },{ char: 'きゅ', romaji: 'kyu' },{ char: 'きょ', romaji: 'kyo' },
  { char: 'しゃ', romaji: 'sha' },{ char: 'しゅ', romaji: 'shu' },{ char: 'しょ', romaji: 'sho' },
  { char: 'ちゃ', romaji: 'cha' },{ char: 'ちゅ', romaji: 'chu' },{ char: 'ちょ', romaji: 'cho' },
  { char: 'にゃ', romaji: 'nya' },{ char: 'にゅ', romaji: 'nyu' },{ char: 'にょ', romaji: 'nyo' },
  { char: 'ひゃ', romaji: 'hya' },{ char: 'ひゅ', romaji: 'hyu' },{ char: 'ひょ', romaji: 'hyo' },
  { char: 'みゃ', romaji: 'mya' },{ char: 'みゅ', romaji: 'myu' },{ char: 'みょ', romaji: 'myo' },
  { char: 'りゃ', romaji: 'rya' },{ char: 'りゅ', romaji: 'ryu' },{ char: 'りょ', romaji: 'ryo' },
];

const smallTsu = [
  { char: 'っ + た → った', romaji: 'tta' },
  { char: 'っ + か → っか', romaji: 'kka' },
  { char: 'っ + さ → っさ', romaji: 'ssa' },
  { char: 'っ + ぱ → っぱ', romaji: 'ppa' },
];

const longVowels = [
  { char: 'ああ / あー', romaji: 'aa' },{ char: 'いい / いー', romaji: 'ii' },{ char: 'うう / うー', romaji: 'uu' },{ char: 'ええ / えー', romaji: 'ee' },{ char: 'おお / おー', romaji: 'oo' },
];

export default function HiraganaPage() {
  const sections = [
    { title: 'Basic Characters', items: basic },
    { title: 'Dakuon & Handakuon', items: dakuon },
    { title: 'Combo (Youon)', items: combo },
    { title: 'Small っ (Sokuon)', items: smallTsu },
    { title: 'Long Vowels', items: longVowels },
  ];

  return (
    <div className="page-content">
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
        <Link to="/learn" className="back-link" aria-label="Return to Learn">
          <AiOutlineArrowLeft className="back-icon" />
        </Link>
        <h1 style={{margin:0}}>Hiragana</h1>
      </div>
      <p>Explore Hiragana characters and their variations.</p>
      <ScriptGrid sections={sections} />
    </div>
  );
}
