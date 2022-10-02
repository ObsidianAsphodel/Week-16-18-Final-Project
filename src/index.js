import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter - a router needed for browsers
  <React.StrictMode>
      {/* Wrap the entire application inside of the Browser Router */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
