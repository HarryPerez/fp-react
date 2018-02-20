import React from 'react';

import reactSvg from '../../../../assets/default_book.svg';

import './styles.css'

const Suggestion = () => (
  <div className='suggestion-container'>
    <h1 className='suggestion-title'>Sugerencias</h1>
    <div className='suggestion-refs'>
      <div className='suggestion-image'>
        <img src={reactSvg} className='suggestion-svg' alt="svg" />
      </div>
      <div className='suggestion-image'>
        <img src={reactSvg} className='suggestion-svg' alt="svg" />
      </div>
      <div className='suggestion-image'>
        <img src={reactSvg} className='suggestion-svg' alt="svg" />
      </div>
      <div className='suggestion-image'>
        <img src={reactSvg} className='suggestion-svg' alt="svg" />
      </div>
    </div>
  </div>
);

export default Suggestion;
