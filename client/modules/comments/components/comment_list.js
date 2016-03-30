import React, { PropTypes } from 'react';
import CreateComment from '../containers/create_comment.js';
import { Avatar, List, ListItem } from 'material-ui';
import { SocialPerson } from 'material-ui/lib/svg-icons';

const CommentList = ({ comments, postId }) => (
  <div className="comments">
    <div>
      <CreateComment postId={postId} />
    </div>
    <List className="comment-list">
      {comments.length === 0 ? <p>No Comments Yet!</p> : null}
      {comments.map(comment => (
        <ListItem
          key={comment._id}
          className="comment"
          leftAvatar={<Avatar icon={<SocialPerson />} />}
          primaryText={comment.text}
          secondaryText={`${comment.author}${comment.saving ? '...' : ''}`}
        />
      ))}
    </List>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  postId: PropTypes.string.isRequired,
};

export default CommentList;
