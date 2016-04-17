import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Context from '../../../../../.storybook/Context';
import NewPost from '../newpost';

storiesOf('core.NewPost', module)
  .add('default view', () => {
    return (
      <Context>
        <NewPost create={action('create post')} />
      </Context>
    );
  })
  .add('with error', () => {
    const error = 'This is the error message';
    return (
      <Context>
        <NewPost error={error} create={action('create post')} />
      </Context>
    );
  });
