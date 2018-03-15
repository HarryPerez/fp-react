import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Comment from './layout';

class CommentContainer extends Component {
  handleRender = comments =>
    comments.map(comment => <Comment key={comment.id} comment={comment} showTitle={this.props.showTitle} />);

  render() {
    return <Fragment>{this.handleRender(this.props.comments)}</Fragment>;
  }
}

CommentContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired
    })
  ),
  showTitle: PropTypes.bool.isRequired
};

export default CommentContainer;
