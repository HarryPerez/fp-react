import React from 'react';

import profilePicture from '../../../../assets/franco.png';

import './styles.css'

const NewComment = () => (
  <div className='newcomment-container'>
      <div className='picture-container'>
        <img src={profilePicture} className='profile-picture' alt="svg" />
      </div>
      <div className='addcomment-container'>
        <h1 className='addcomment-title'>
          Agregar comentario
        </h1>
        <textarea className='addcomment-area'/>
        <div className='sendcomment-button'>
          <h1 className='sendcomment-title'>
            Enviar
          </h1>
        </div>
      </div>
  </div>
);

export default NewComment;
