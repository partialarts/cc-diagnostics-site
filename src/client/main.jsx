import React from 'react'
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom/client'
import App from '../../src/App.jsx'
import '../../src/index.css'

hydrateRoot(document.getElementById('root'),
  // ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
