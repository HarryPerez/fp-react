import React from 'react';
import PropTypes from 'prop-types';

import loadingGif from '../../assets/loading.gif';

import styles from './styles.scss';

const Loader = Component => {
  const LoadingComponent = ({ isLoading, ...props }) => {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className={styles.iconContainer}>
        <img src={loadingGif} alt="loadingGif" className={styles.loadingIcon} />
      </div>
    );
  };

  LoadingComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired
  };

  return LoadingComponent;
};

export default Loader;
