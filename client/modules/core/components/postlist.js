import React, { PropTypes } from 'react';
import {
  Card,
  CardTitle,
  CardText,
  List,
  ListItem,
} from 'material-ui';
import {
  ActionGrade,
} from 'material-ui/svg-icons';

const PostList = ({ posts }) => (
  <Card className="postlist">
    <CardTitle title="Posts" />
    <CardText>
      <List>
        {posts.map(post => (
          <ListItem
            key={post._id}
            leftIcon={<ActionGrade />}
            primaryText={post.title}
            linkButton
            href={`/post/${post._id}`}
          />
        ))}
      </List>
    </CardText>
  </Card>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
