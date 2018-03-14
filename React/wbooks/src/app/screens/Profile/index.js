import React from 'react';

import Book from '../../components/Book';

import ProfileSummary from './components/ProfileSummary';
import styles from './styles.scss';

const book = {
  id: '1',
  author: 'autor',
  title: 'titulo'
};

const Profile = () => (
  <div className={styles.profileContainer}>
    <ProfileSummary />
    <div className={styles.readContainer}>
      <h1 className={styles.sectionTitle}>Leídos</h1>
      <div className={styles.booksContainer}>
        <Book book={book} />
        <Book book={book} />
        <Book book={book} />
        <Book book={book} />
      </div>
    </div>
    <div className={styles.wishContainer}>
      <h1 className={styles.sectionTitle}>Wishlist</h1>
      <div className={styles.booksContainer}>
        <Book book={book} />
        <Book book={book} />
        <Book book={book} />
        <Book book={book} />
      </div>
    </div>
    <div className={styles.commentContainer} />
  </div>
);

export default Profile;
