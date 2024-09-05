import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct way to import in modern React
import App from './App';

ReactDOM.hydrateRoot(document.getElementById('app'), <App />);
