import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import moment from 'moment';

import Loader from '../../../../components/Loader';
import Button from '../../../../components/Button';

import styles from './styles.scss';

const Rent = props => (
  <Button
    title={props.actionTitle}
    styles={props.actionTitle === 'Alquilar' ? styles.buttonRentStyle : styles.buttonWishStyle}
  />
);

const getActionTitle = createSelector(
  [state => state.rents.rents, state => state.session.userName],
  (rents, userName) => {
    if (rents) {
      const lastRent = rents[rents.length - 1];
      const lastRentTo = lastRent.to;
      const lastRentUserName = lastRent.user.email;
      const today = moment().format('YYYY-MM-DD');

      return today > lastRentTo ? 'Alquilar' : userName !== lastRentUserName ? 'Wishlist' : 'Devolver';
    }
    return '';
  }
);

const mapStateToProps = state => ({
  isLoading: state.rents.isLoading,
  actionTitle: getActionTitle(state)
});

Rent.propTypes = {
  actionTitle: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Loader(Rent));
