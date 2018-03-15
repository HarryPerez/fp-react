import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Button from '../../../../components/Button';

import styles from './styles.scss';

class Rent extends Component {
  getActionTitle = () => {
    if (this.props.status.canWish) {
      return 'Wishlist';
    }
    return 'Alquilar';
  };

  getStyle = () => {
    const actionTitle = this.getActionTitle();
    if (actionTitle === 'Alquilar') {
      if (this.props.status.canRent) {
        return styles.buttonRentStyle;
      }
      return styles.buttonDisabledStyle;
    }
    return styles.buttonWishStyle;
  };

  getDisabled = () => {
    const actionTitle = this.getActionTitle();
    if (actionTitle === 'Alquilar') {
      if (this.props.status.canRent) {
        return false;
      }
      return true;
    }
    return false;
  };

  getClickHandler = () => {
    const actionTitle = this.getActionTitle();
    if (actionTitle === 'Alquilar') {
      if (this.props.status.canRent) {
        return this.props.handleRent;
      }
      return null;
    }
    return this.props.handleWish;
  };

  render() {
    return (
      <Fragment>
        {this.props.status.rentedByUser && (
          <h1 className={styles.returnTitle}>
            Devolver antes del{' '}
            {moment()
              .add(1, 'days')
              .format('YYYY-MM-DD')}
          </h1>
        )}
        {this.props.status.rentedByOther && (
          <h1 className={styles.returnTitle}>*No se encuentra disponible</h1>
        )}
        <Button
          title={this.getActionTitle()}
          style={this.getStyle()}
          onClick={this.getClickHandler()}
          disabled={this.props.isLoading ? this.props.isLoading : this.getDisabled()}
        />
      </Fragment>
    );
  }
}

Rent.propTypes = {
  status: PropTypes.shape({
    canRent: PropTypes.bool.isRequired,
    canWish: PropTypes.bool.isRequired,
    rentedByUser: PropTypes.bool.isRequired,
    rentedByOther: PropTypes.bool.isRequired
  }),
  handleWish: PropTypes.func.isRequired,
  handleRent: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Rent;
