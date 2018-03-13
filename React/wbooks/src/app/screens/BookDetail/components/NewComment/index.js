import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as booksActions from '../../../../../redux/books/actions';

import NewComment from './layout';

class NewCommentContainer extends Component {
  handleSubmit = async () => {
    await this.props.handleSubmit(this.props.bookId, this.props.userId, this.props.newComment);
    this.props.loadComments(this.props.bookId);
  };

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

const validateInput = createSelector([state => state.books.newComment], newComment => {
  if (newComment === '') {
    return 'El comentario no puede estar vacío.';
  }
  return '';
});

const mapStateToProps = state => ({
  hasErrors: validateInput(state),
  bookId: state.books.bookId,
  userId: state.session.userId,
  newComment: state.books.newComment,
  isLoading: state.books.commentsRequestLoading
});

const mapDispatchToProps = dispatch => ({
  handleCommentInput: event => dispatch(booksActions.saveComment(event.target.value)),
  handleSubmit: (bookId, userId, comment) => dispatch(booksActions.sendComment(bookId, userId, comment)),
  loadComments: bookId => dispatch(booksActions.fetchComments(bookId))
});

NewCommentContainer.propTypes = {
  hasErrors: PropTypes.string,
  handleCommentInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loadComments: PropTypes.func.isRequired,
  newComment: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCommentContainer);
