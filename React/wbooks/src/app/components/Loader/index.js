import React from 'react';

import loadingGif from '../../assets/loading.gif';

import styles from './styles.scss';

const Loader = (Component) => {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (
      <div className={styles.iconContainer}>
        <img src={loadingGif} alt='loadingGif'/>
      </div>
    );
  }
}

export default Loader;
