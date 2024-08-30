import React from 'react'; 
import express from 'express';
import { StaticRouter } from 'react-router-dom/server';
import ReactDOMServer from 'react-dom/server';
import App from '../App.jsx';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/static', express.static(path.resolve(__dirname, 'dist')));

// Define and export the createReactApp function
export const createReactApp = async (location) => {
    return ReactDOMServer.renderToString(
        <StaticRouter location={location}>
            <App />
        </StaticRouter>
    );
};

app.get('*', async (req, res) => {
    try {
        const indexHTML = await createReactApp(req.url);
        res.status(200).send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>My App</title>
                </head>
                <body>
                    <div id="root">${indexHTML}</div>
                    <script src="/static/client.js"></script>
                </body>
            </html>
        `);
    } catch (error) {
        console.error('Error rendering React app:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
