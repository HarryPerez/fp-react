import React from 'react';
import PropTypes from 'prop-types';

import Comment from './layout';

const CommentContainer = props => (
  <div>
    {props.comments.map(comment => (
      <Comment key={comment.id} comment={comment} showTitle={props.showTitle} />
    ))}
  </div>
);

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
