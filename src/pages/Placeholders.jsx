import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export function PlaceholderLesson({ title }) {
  return (
    <div className="page-content">
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
        <Link to="/learn" className="back-link" aria-label="Return to Learn">
          <AiOutlineArrowLeft className="back-icon" />
        </Link>
        <h1 style={{margin:0}}>{title}</h1>
      </div>
      <p>Placeholder content for {title}. This lesson will be added soon.</p>
    </div>
  );
}

export default function Placeholders() {
  return <PlaceholderLesson title="Placeholder" />;
}
