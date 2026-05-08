import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Inline styles for base layout normalization
const style = document.createElement('style');
style.textContent = `
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  :root { color-scheme: dark; }
  body { margin: 0; background: #020617; color: #cbd5e1; font-family: 'Inter', sans-serif; overflow-x: hidden; }
  html { scroll-behavior: smooth; }
  
  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: #020617; }
  ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 5px; }
  ::-webkit-scrollbar-thumb:hover { background: #334155; }
`;
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)