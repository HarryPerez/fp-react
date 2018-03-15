import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as booksActions from '../../../../../redux/books/actions';

import NewComment from './layout';

class NewCommentContainer extends Component {
  handleSubmit = () => this.props.handleSubmit();

  render() {
    return (
      <NewComment
        hasErrors={this.props.hasErrors}
        handleSubmit={this.handleSubmit}
        handleCommentInput={this.props.handleCommentInput}
        isLoading={this.props.isLoading}
      />
    );
  }
}

const validateInput = createSelector(
  [state => state.books.newComment],
  newComment => (newComment === '' ? 'El comentario no puede estar vacío.' : '')
);

const mapStateToProps = state => ({
  hasErrors: validateInput(state),
  bookId: state.books.bookId,
  userId: state.session.userId,
  isLoading: state.books.commentsRequestLoading
});

const mapDispatchToProps = dispatch => ({
  handleCommentInput: event => dispatch(booksActions.saveComment(event.target.value)),
  handleSubmit: () => dispatch(booksActions.sendComment())
});

NewCommentContainer.propTypes = {
  hasErrors: PropTypes.string,
  handleCommentInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCommentContainer);
