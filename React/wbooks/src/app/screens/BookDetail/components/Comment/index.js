import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Comment from './layout';

class CommentContainer extends Component {
  handleRender = comments => comments.map(comment => <Comment key={comment.id} comment={comment} />);

  render() {
    return <Fragment>{this.handleRender(this.props.comments)}</Fragment>;
  }
}

const getLastComments = createSelector(
  [state => state.books.comments],
  comments => (comments ? (comments.length > 3 ? comments.slice(0, 4) : comments) : [])
);

const mapStateToProps = state => ({
  comments: getLastComments(state)
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

export default connect(mapStateToProps)(CommentContainer);
