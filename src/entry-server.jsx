import React from 'react';
import ReactDOMServer from 'react-dom/server'; // Correct way to import for SSR
import App from './App';

export function render(url) {
  return ReactDOMServer.renderToString(<App />);
}
