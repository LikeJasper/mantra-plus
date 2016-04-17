import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Context from '../../../../../.storybook/Context';
import CreateComment from '../create_comment';

storiesOf('comments.CreateComment', module)
  .add('default view', () => (
    <Context>
      <div className="comments">
        <CreateComment postId="the-id" create={action('create comment')} />
      </div>
    </Context>
  ))
  .add('with error', () => (
    <Context>
      <div className="comments">
        <CreateComment
          error="This is the error message"
          postId="the-id"
          create={action('create comment')}
        />
      </div>
    </Context>
  ));
