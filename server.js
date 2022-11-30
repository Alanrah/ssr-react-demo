import React from 'react';
import ReactDomServer from 'react-dom/server'
import {StaticRouter} from 'react-router-dom/server';
import Routes, { routesConfig } from './pages/route';
import { Helmet } from 'react-helmet';

const history = require('connect-history-api-fallback');
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('./dist'));

app.use((req, res, next) => {
    console.log(req.url);
    if (req.url === '/health-check') {
        res.send('ok');
    } else {
        next();
    }
});

app.use(
    history({
        verbose: process.env.NODE_ENV !== 'production',
    }),
);

const preloadedState = 'todo';

app.get('*', (req, res) => {
    const content = ReactDomServer.renderToString(
        <StaticRouter location={req.url}>
            <Routes></Routes>
        </StaticRouter>
    );

    const helmet = Helmet.renderStatic();

    // server 注水到 client
    const html = `
      <html>
        <head>
          ${helmet?.title?.toString()}
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
          window.__PRELOAD_STATE__=${JSON.stringify(preloadedState)}
          </script>
          <script src="bundle_client.js"></script>
        </body>
      </html>
    `;

    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8;',
    });
    res.end(html);
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});