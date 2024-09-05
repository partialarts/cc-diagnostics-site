import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { createServer as createViteServer } from 'vite';

const isProduction = process.env.NODE_ENV === 'production';

const createServer = async () => {
  const app = express();

  if (isProduction) {
    // Serve static assets from the client build directory
    app.use(express.static(path.resolve(__dirname, 'dist/client')));

    // Read the pre-built HTML template
    const template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');

    // Import the pre-built server-side rendering code
    const { render } = await import('./dist/server/entry-server.jsx');

    app.use('*', async (req, res) => {
      try {
        const url = req.originalUrl;
        const appHtml = await render(url);
        const html = template.replace(`<!--ssr-outlet-->`, appHtml);

        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } catch (e) {
        console.error(e);
        res.status(500).end('Internal Server Error');
      }
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: 'ssr' }
    });
    app.use(vite.middlewares);

    app.use('*', async (req, res) => {
      try {
        const url = req.originalUrl;
        const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
        const appHtml = await render(url);
        const html = template.replace(`<!--ssr-outlet-->`, appHtml);

        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      } catch (e) {
        vite.ssrFixStacktrace(e);
        console.error(e);
        res.status(500).end('Internal Server Error');
      }
    });
  }

  app.listen(5173, () => {
    console.log('Server running on http://localhost:5173');
  });
};

createServer();
