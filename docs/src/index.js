import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import Router from './Router';

const root = () => (
  <Router />
);

ReactDOM.render(
  root(),
  document.getElementById('root')
);
