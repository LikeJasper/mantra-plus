import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Context from '../../../../../.storybook/Context';
import Helmet from '../helmet';

storiesOf('core.Helmet', module)
  .add('default view', () => (
    <Context>
      <Helmet />
    </Context>
  ));
