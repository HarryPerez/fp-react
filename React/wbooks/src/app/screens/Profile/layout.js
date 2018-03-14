import React from 'react';
import PropTypes from 'prop-types';

import { bookDetailPropType } from '../../../redux/books/proptypes';
import Loader from '../../components/Loader';
import Comment from '../../components/Comment';

import ProfileSummary from './components/ProfileSummary';
import BookSummary from './components/BookSummary';
import styles from './styles.scss';

const Profile = props => (
  <div className={styles.profileContainer}>
    <ProfileSummary user={props.user} readed={props.rentsLength} comments={props.commentsLength} />
    <div className={styles.containerSeparator}>
      {props.rentedBooks && <BookSummary books={props.rentedBooks} title="Leídos" />}
      {props.wishedBooks && <BookSummary books={props.wishedBooks} title="Wishlist" />}
    </div>
    <h1 className={styles.sectionTitle}>Comentarios</h1>
    <div className={styles.commentsContainer}>
      <Comment comments={props.comments} showTitle />
    </div>
  </div>
);

Profile.propTypes = {
  wishedBooks: PropTypes.arrayOf(bookDetailPropType),
  rentedBooks: PropTypes.arrayOf(bookDetailPropType),
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired
    })
  ),
  rentsLength: PropTypes.number.isRequired,
  commentsLength: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired
  })
};

export default Loader(Profile);
