// entry-client.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Client-side router
import App from './App';

ReactDOM.hydrateRoot(
  document.getElementById('app'),
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
