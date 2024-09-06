// // entry-client.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import { HelmetProvider } from 'react-helmet-async'; // Ensure HelmetProvider is imported
// import App from './App';
// import './index.css'; // Ensure CSS is imported here

// ReactDOM.hydrateRoot(
//   document.getElementById('app'),
//   <HelmetProvider> {/* Remove context here, as it is not needed on the client */}
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </HelmetProvider>
// );

// entry-client.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import './index.css'; // Ensure CSS is imported here

const helmetContext = {}; // Correctly initialize the helmet context

ReactDOM.hydrateRoot(
  document.getElementById('app'),
  <HelmetProvider context={helmetContext}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
