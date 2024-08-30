import express from 'express';
import { createReactApp as renderApp } from './src/server/server.jsx';
import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.static(path.resolve(process.cwd(), 'public')));

app.get('*', async (req, res) => {
  const context = {};
  const html = renderApp(req, context);

  try {
    const data = await fs.readFile(path.resolve(process.cwd(), 'public', 'index.html'), 'utf8');
    res.send(data.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
  } catch (err) {
    res.status(500).send('Some error happened');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
