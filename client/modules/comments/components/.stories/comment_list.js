import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Context from '../../../../../.storybook/Context';
import CommentList from '../comment_list';

storiesOf('comments.CommentList', module)
  .add('no comments', () => (
    <Context>
      <CommentList comments={[]} />
    </Context>
  ))
  .add('with comments', () => {
    const comments = [
      { _id: 'one', text: 'This is cool.', author: 'arunoda' },
      { _id: 'two', text: 'Yeah! I agree.', author: 'sacha' },
    ];
    return (
      <Context>
        <CommentList comments={comments} />
      </Context>
    );
  })
  .add('saving a comment', () => {
    const comments = [
      { _id: 'one', text: 'This is a new comment.', author: 'arunoda', saving: true },
      { _id: 'two', text: 'Yeah! I agree.', author: 'sacha' },
    ];
    return (
      <Context>
        <CommentList comments={comments} />
      </Context>
    );
  });
