import React, { PropTypes } from 'react';
import CommentList from '../../comments/containers/comment_list';
import {
  Card,
  CardTitle,
  CardText,
  Divider,
} from 'material-ui';

const Post = ({ post }) => (
  <Card>
    <CardTitle title={post.title} subtitle={post.saving ? 'Saving...' : null} />
    <CardText>
      {post.content}
    </CardText>
    <Divider />
    <CardTitle title="Comments" />
    <CardText>
      <CommentList postId={post._id} />
    </CardText>
  </Card>
);

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
