import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function preRender() {
  const vite = await createServer({
    logLevel: 'error',
    server: { middlewareMode: true },
  });

  // Define all routes that need to be pre-rendered
  const routesToPrerender = ['/', '/about', '/contact', '/news', '/products'];

  // Read the HTML template
  const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

  // Iterate over each route
  for (const route of routesToPrerender) {
    try {
      const url = route;
      const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

      // Initialize the helmet context to capture meta tags
      const helmetContext = {};

      // Render the application HTML for the current route
      const appHtml = await render(url, helmetContext);

      // Extract meta tags from helmetContext
      const { helmet } = helmetContext || { title: '', meta: '', link: '' };

      // Inject the captured meta tags into the HTML template
     const html = template
  .replace('<!--ssr-helmet-title-->', helmet.title ? helmet.title.toString() : '')
  .replace('<!--ssr-helmet-meta-->', helmet.meta ? helmet.meta.toString() : '')
  .replace('<!--ssr-helmet-link-->', helmet.link ? helmet.link.toString() : '');

      // Define the output path for the HTML file
      const filePath = path.resolve(
        __dirname,
        `dist/client${route === '/' ? '/index' : route}.html`
      );

      // Ensure the directory exists and write the file
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, html);

      // Log the successful generation of the file
      console.log(`Successfully generated: ${filePath}`);
    } catch (error) {
      // Log any errors that occur during rendering
      console.error(`Failed to render route ${route}:`, error);
    }
  }

  console.log('Pre-rendering completed.');
  vite.close();
}

preRender();
