import React from 'react';
import Router from './Router';
import ReactDOM from 'react-dom';
import './styles/reset.scss';
import './styles/common.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
