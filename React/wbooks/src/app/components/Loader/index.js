import React from 'react';
import PropTypes from 'prop-types';

import loadingGif from '../../assets/loading.gif';

import styles from './styles.scss';

const Loader = (Component, isLoading) =>
  function LoadingComponent({ ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className={styles.iconContainer}>
        <img src={loadingGif} alt="loadingGif" />
      </div>
    );
  };

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default Loader;
