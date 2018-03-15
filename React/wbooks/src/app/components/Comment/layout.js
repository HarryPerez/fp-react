import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

import profilePicture from '../../assets/profile_picture.png';

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
      <div className={styles.tittleContainer}>
        <Link
          className={styles.bookLink}
          to={`/profile/${props.comment.user.id}`}
          href={`/profile/${props.comment.user.id}`}
        >
          <h1 className={styles.commentTitle}>{`${props.comment.user.first_name}  ${
            props.comment.user.last_name
          }`}</h1>
        </Link>

        {props.showTitle && (
          <Link
            className={styles.bookLink}
            to={`/books/${props.comment.book.id}`}
            href={`/books/${props.comment.book.id}`}
          >
            <h1 className={styles.commentTitle}>{props.comment.book.title}</h1>
          </Link>
        )}
      </div>
      <h2 className={styles.commentDate}>{moment(props.comment.created_at).format('YYYY/MM/DD')}</h2>
      <span className={styles.commentDescription}>{props.comment.content}</span>
    </div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      image_url: PropTypes.string
    }),
    book: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }),
    created_at: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }),
  showTitle: PropTypes.bool.isRequired
};

export default Comment;
