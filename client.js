import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createStoreInstance from './store';
import Routes from './pages/route';

// client 中注入 server 的window脱水数据
const store = createStoreInstance(window?.__PRELOAD_STATE__);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
