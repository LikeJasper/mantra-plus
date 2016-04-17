import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Context from '../../../../../.storybook/Context';
import Navigation from '../navigation';

storiesOf('core.Navigation', module)
  .add('default view', () => {
    return (
      <Context>
        <Navigation />
      </Context>
    );
  });
