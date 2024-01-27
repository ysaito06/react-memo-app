// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// clientからimportする
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app') as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
