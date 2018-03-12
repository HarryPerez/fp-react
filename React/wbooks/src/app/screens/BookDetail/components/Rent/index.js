import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import moment from 'moment';

import Loader from '../../../../components/Loader';
import Button from '../../../../components/Button';
import * as rentsActions from '../../../../../redux/rents/actions';

import styles from './styles.scss';

class Rent extends Component {
  rentTitle = 'Alquilar';
  wishTitle = 'Wishlist';
  backTitle = 'Devolver';

  handleClick = () => {
    const rents = this.props.localRents.concat(this.props.bookId);
    if (this.props.actionTitle === this.rentTitle) this.props.handleRent(rents);
    else if (this.props.actionTitle === this.wishTitle)
      this.props.handleWish(this.props.bookId, this.props.user);
  };

  render() {
    const canRentOrWish = this.props.actionTitle !== this.backTitle;
    return (
      <div>
        {!canRentOrWish && (
          <h1 className={styles.returnTitle}>
            Devolver antes del{' '}
            {moment()
              .add(1, 'days')
              .format('YYYY-MM-DD')}
          </h1>
        )}
        <Button
          title={canRentOrWish ? this.props.actionTitle : this.rentTitle}
          styles={
            this.props.actionTitle === this.rentTitle
              ? styles.buttonRentStyle
              : this.props.actionTitle === this.wishTitle
                ? styles.buttonWishStyle
                : styles.buttonDisabledStyle
          }
          onClick={this.handleClick}
          disabled={!canRentOrWish}
        />
      </div>
    );
  }
}

const getActionTitle = createSelector(
  [
    state => state.rents.rents,
    state => state.rents.localRents,
    state => state.session.userName,
    (state, props) => props.bookId
  ],
  (rents, localRents, userName, bookId) => {
    if (localRents.length > 0) {
      if (localRents.find(id => id === bookId)) {
        return 'Devolver';
      }
    }
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

const mapStateToProps = (state, props) => ({
  isLoading: state.rents.isLoading,
  actionTitle: getActionTitle(state, props),
  localRents: state.rents.localRents,
  user: state.session.user
});

const mapDispatchToProps = dispatch => ({
  handleRent: localRents => dispatch(rentsActions.saveRents(localRents)),
  handleWish: (bookId, user) => dispatch(rentsActions.saveWish(bookId, user))
});

Rent.propTypes = {
  actionTitle: PropTypes.string.isRequired,
  handleRent: PropTypes.func.isRequired,
  bookId: PropTypes.number.isRequired,
  localRents: PropTypes.arrayOf(PropTypes.number),
  user: PropTypes.string.isRequired,
  handleWish: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Loader(Rent));
