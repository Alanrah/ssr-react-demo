import React from 'react';
import ReactDomServer from 'react-dom/server'

const history = require('connect-history-api-fallback');
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
    console.log(req.url);
    if (req.url === '/health-check') {
        res.send('ok');
    } else {
        next();
    }
});


app.get('*', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8;',
    });
    res.end('ssr');
});

app.use(
    history({
        verbose: process.env.NODE_ENV !== 'production',
    }),
);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});