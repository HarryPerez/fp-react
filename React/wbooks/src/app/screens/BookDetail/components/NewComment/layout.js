import React from 'react';
import PropTypes from 'prop-types';

import profilePicture from '../../../../assets/profile_picture.png';
import AccessError from '../../../../components/AccessError/';
import Button from '../../../../components/Button';

import styles from './styles.scss';

const NewComment = props => (
  <div className={styles.newcommentContainer}>
    <div className={styles.pictureContainer}>
      <img src={profilePicture} className={styles.profilePicture} alt="profilePicture" />
    </div>
    <div className={styles.addcommentContainer}>
      <h1 className={styles.addcommentTitle}>Agregar comentario</h1>
      <textarea maxLength="255" className={styles.addcommentArea} onChange={props.handleCommentInput} />
      {props.hasErrors && <AccessError errors={props.hasErrors} />}
      <Button
        title="Enviar"
        styles={`${styles.sendcommentButton} ${styles.sendcommentTitle}`}
        disabled={props.hasErrors || props.isLoading}
        onClick={props.handleSubmit}
      />
    </div>
  </div>
);

NewComment.propTypes = {
  handleCommentInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  hasErrors: PropTypes.string,
  isLoading: PropTypes.bool.isRequired
};

export default NewComment;
