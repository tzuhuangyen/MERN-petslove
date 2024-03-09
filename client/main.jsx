import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './src/App.jsx';
import './src/index.css';
// import './assets/all.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter
    basename={process.env.NODE_ENV === 'production' ? '/MERN-petslove/' : '/'}
  >
    <App />{' '}
  </BrowserRouter>
);
