// // entry-server.jsx
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import { StaticRouter } from 'react-router-dom/server';
// import { HelmetProvider } from 'react-helmet-async';
// import App from './App';
// import './index.css';

// // Accept helmetContext as a parameter
// export function render(url, helmetContext) {
//   // Pass helmetContext to HelmetProvider
//   return ReactDOMServer.renderToString(
//     <HelmetProvider context={helmetContext}>
//       <StaticRouter location={url}>
//         <App />
//       </StaticRouter>
//     </HelmetProvider>
//   );
// }

// entry-server.jsx
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

export async function render(url) {
  const helmetContext = {}; // Correctly initialize the helmet context

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext; // Extract helmet data correctly

  // Check if helmet is capturing correctly, log to debug
  console.log('Helmet Title:', helmet.title ? helmet.title.toString() : 'undefined');
  console.log('Helmet Meta:', helmet.meta ? helmet.meta.toString() : 'undefined');
  console.log('Helmet Link:', helmet.link ? helmet.link.toString() : 'undefined');

  // Ensure the helmet data is injected correctly
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    </head>
    <body>
      <div id="app">${appHtml}</div>
      <script type="module" src="/src/entry-client.jsx"></script>
    </body>
    </html>
  `;

  return html;
}
