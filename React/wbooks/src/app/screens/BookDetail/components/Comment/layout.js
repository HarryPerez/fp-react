import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import profilePicture from '../../../../assets/profile_picture.png';

import styles from './styles.scss';

const Comment = props => (
  <div className={styles.commentContainer}>
    <div className={styles.pictureContainer}>
      <img
        src={props.comment.user.image_url || profilePicture}
        className={styles.profilePicture}
        alt="profilePicture"
      />
    </div>
    <div className={styles.commentDetail}>
      <h1 className={styles.commentTitle}>{`${props.comment.user.first_name}  ${
        props.comment.user.last_name
      }`}</h1>
      <h2 className={styles.commentDate}>{moment(props.comment.created_at).format('YYYY/MM/DD')}</h2>
      <span className={styles.commentDescription}>{props.comment.content}</span>
    </div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    user: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      image_url: PropTypes.string
    }),
    created_at: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })
};

export default Comment;
