import React from 'react';

import defaultBookIcon from '../../../../assets/default_book.svg';

import styles from './styles.scss';

const Suggestion = () => (
  <div className={styles.suggestionContainer}>
    <h1 className={styles.suggestionTitle}>Sugerencias</h1>
    <div className={styles.suggestionRefs}>
      <div className={styles.suggestionImage}>
        <img src={defaultBookIcon} className={styles.suggestionSvg} alt="suggestionImage" />
      </div>
      <div className={styles.suggestionImage}>
        <img src={defaultBookIcon} className={styles.suggestionSvg} alt="suggestionImage" />
      </div>
      <div className={styles.suggestionImage}>
        <img src={defaultBookIcon} className={styles.suggestionSvg} alt="suggestionImage" />
      </div>
      <div className={styles.suggestionImage}>
        <img src={defaultBookIcon} className={styles.suggestionSvg} alt="suggestionImage" />
      </div>
    </div>
  </div>
);

export default Suggestion;
