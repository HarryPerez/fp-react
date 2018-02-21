import React from 'react';

import profilePicture from '../../../../assets/franco.png';

import styles from './styles.scss'

const NewComment = () => (
  <div className={styles.newcommentContainer}>
      <div className={styles.pictureContainer}>
        <img src={profilePicture} className={styles.profilePicture} alt="svg" />
      </div>
      <div className={styles.addcommentContainer}>
        <h1 className={styles.addcommentTitle}>Agregar comentario</h1>
        <textarea className={styles.addcommentArea}/>
        <div className={styles.sendcommentButton}>
          <h1 className={styles.sendcommentTitle}>Enviar</h1>
        </div>
      </div>
  </div>
);

export default NewComment;
