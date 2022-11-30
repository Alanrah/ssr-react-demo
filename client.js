import React from 'react';
import ReactDom from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import Routes, { routesConfig } from './pages/route';
import { Helmet } from 'react-helmet';

ReactDom.hydrateRoot (
    document.querySelector('#root'),
    <BrowserRouter>
        <Routes></Routes>
    </BrowserRouter>,
);