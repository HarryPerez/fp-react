import React from 'react';
import PropTypes from 'prop-types';

import reactSvg from '../../../../assets/default_book.svg';

import styles from './styles.scss'

const Book = props => (
  <div className={styles.bookContainer}>
    <div className={styles.bookImage}>
      <a href={'/books/' + props.id}>
        <img src={props.imageUrl ? props.imageUrl : reactSvg} className={props.imageUrl ? styles.bookSvg : styles.defaultSvg} alt="svg" />
      </a>
    </div>
    <div className={styles.bookInfo}>
      <h1 className={styles.bookTitle}>{props.title}</h1>
      <h2 className={styles.bookAuthor}>{props.author}</h2>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  id: PropTypes.number.isRequired
};

export default Book;
