import React from 'react';

import profilePicture from '../../../../assets/franco.png';

import './styles.css'

const Comment = () => (
  <div className='comment-container'>
      <div className='picture-container'>
        <img src={profilePicture} className='profile-picture' alt="svg" />
      </div>
      <div className='comment-detail'>
        <h1 className='comment-title'>
          Perez Franco
        </h1>
        <h2 className='comment-date'>
          xx/xx/xx
        </h2>
        <span className='comment-description'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </span>
      </div>
  </div>
);

export default Comment;
