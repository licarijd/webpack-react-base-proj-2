import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./build'));

app.get('/*', (req, res) => {
    const name = 'Marvelous Wololo'

    const component = ReactDOMServer.renderToString(<App name={name} />)
  
    const html = `
    <!doctype html>
      <html>
      <head>
        <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name })}</script>
      </head>
      <body>
      <div id="root">${component}</div>
      <script src="/static/home.js"></script>
    </body>
    </html>`
  
    res.send(html)
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});