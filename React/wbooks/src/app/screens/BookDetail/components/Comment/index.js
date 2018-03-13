import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Loader from '../../../../components/Loader';

import Comment from './layout';

const CommentContainer = props => (
  <div>{props.comments.map(comment => <Comment key={comment.id} comment={comment} />)}</div>
);

const getLastComments = createSelector([state => state.books.comments], comments => {
  if (comments) {
    if (comments.length > 3) {
      return comments.slice(0, 4);
    }
    return comments;
  }
  return null;
});

const mapStateToProps = state => ({
  comments: getLastComments(state),
  isLoading: state.books.commentsLoading
});

CommentContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired
    })
  )
};

export default connect(mapStateToProps)(Loader(CommentContainer));
