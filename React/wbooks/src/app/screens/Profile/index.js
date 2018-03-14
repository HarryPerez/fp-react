import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { bookDetailPropType } from '../../../redux/books/proptypes';
import * as sessionActions from '../../../redux/session/actions';

import Profile from './layout';

class ProfileContainer extends Component {
  componentWillMount = async () => {
    const response = await this.props.loadUser(this.props.match.params.userId);
    if (response) {
      this.props.loadRents();
      this.props.loadComments();
    }
  };

  render() {
    return (
      <Profile
        isLoading={this.props.isLoading}
        rentedBooks={this.props.rentedBooks}
        wishedBooks={this.props.wishedBooks}
        comments={this.props.comments}
        rentsLength={this.props.rentsLength}
        commentsLength={this.props.commentsLength}
        user={this.props.user}
      />
    );
  }
}

const getRentedBooks = createSelector([state => state.session.rents], rents => {
  if (rents && rents.length > 0) {
    if (rents.length > 3) {
      return rents.slice(0, 4).map(rent => rent.book);
    }
    return rents.map(rent => rent.book);
  }
  return null;
});

const getWishedBooks = createSelector([state => state.rents.wishes], wishes => {
  if (wishes && wishes.length > 0) {
    if (wishes.length > 3) {
      return wishes.slice(0, 4).map(rent => rent.book);
    }
    return wishes.map(rent => rent.book);
  }
  return null;
});

const getComments = createSelector([state => state.session.comments], comments => {
  if (comments && comments.length > 0) {
    if (comments.length > 3) {
      return comments.slice(0, 4);
    }
    return comments;
  }
  return [];
});

const mapStateToProps = state => ({
  rentedBooks: getRentedBooks(state),
  wishedBooks: getWishedBooks(state),
  comments: getComments(state),
  rentsLength: state.session.rentsLength,
  commentsLength: state.session.commentsLength,
  isLoading: state.session.dataLoading || state.session.rentsLoading || state.rents.wishesLoading,
  user: state.session.userObject
});

const mapDispatchToProps = dispatch => ({
  loadComments: () => dispatch(sessionActions.fetchComments()),
  loadRents: () => dispatch(sessionActions.fetchRents()),
  loadUser: userId => dispatch(sessionActions.fetchUser(userId))
});

ProfileContainer.propTypes = {
  loadComments: PropTypes.func.isRequired,
  loadRents: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  rentedBooks: PropTypes.arrayOf(bookDetailPropType),
  wishedBooks: PropTypes.arrayOf(bookDetailPropType),
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired
    })
  ),
  rentsLength: PropTypes.number.isRequired,
  commentsLength: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.number.isRequired
    })
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
