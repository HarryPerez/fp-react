import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import SessionValidator from './components/SessionValidator/index.js';
import './styles.scss';

const App = () => (
  <BrowserRouter>
    <SessionValidator/>
  </BrowserRouter>
);

export default App;
