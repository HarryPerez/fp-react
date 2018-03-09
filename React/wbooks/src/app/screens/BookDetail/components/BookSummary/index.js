import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const BookSummary = props => (
  <div className={styles.summaryContainer}>
    <h1 className={styles.summaryTitle}>{props.title}</h1>
    <h2 className={styles.summaryAuthor}>{props.author}</h2>
    <h2 className={styles.summaryEdition}>{props.year}</h2>
    <h2 className={styles.summaryGenre}>{props.genre}</h2>
    <p className={styles.summaryDescription}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat.
    </p>
  </div>
);

BookSummary.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired
};

export default BookSummary;
