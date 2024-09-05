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

  const routesToPrerender = ['/', '/about', '/contact', '/news', '/products']; // Add your routes here
  const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

  for (const route of routesToPrerender) {
    const url = route;
    const { render } = await vite.ssrLoadModule('/src/entry-server.js');
    const appHtml = await render(url);

    const html = template.replace(`<!--ssr-outlet-->`, appHtml);

    const filePath = path.resolve(__dirname, `dist/client${route === '/' ? '/index' : route}.html`);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);
  }

  console.log('Pre-rendering completed.');
  vite.close();
}

preRender();
