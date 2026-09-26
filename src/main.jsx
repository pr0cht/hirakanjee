import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

window.addEventListener(
  'auxclick',
  (e) => {
    if (e.button === 1) {
      e.preventDefault();
      e.stopPropagation();
    }
  },
  { capture: true }
);

window.addEventListener(
  'click',
  (e) => {
    if (e.button === 1) {
      e.preventDefault();
      e.stopPropagation();
    }
  },
  { capture: true }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
