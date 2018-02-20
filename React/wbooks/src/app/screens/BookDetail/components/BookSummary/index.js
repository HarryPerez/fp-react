import React from 'react';

import './styles.css'

const BookSummary = () => (
  <div className='summary-container'>
    <h1 className='summary-title'>
      Título
    </h1>
    <h2 className='summary-author'>
      Autor
    </h2>
    <h2 className='summary-edition'>
      Año
    </h2>
    <h2 className='summary-genre'>
      Temática
    </h2>
    <p className='summary-description'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
);

export default BookSummary;
