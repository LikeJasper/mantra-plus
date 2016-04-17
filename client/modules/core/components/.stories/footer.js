import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Context from '../../../../../.storybook/Context';
import Footer from '../footer';

storiesOf('core.Footer', module)
  .add('default view', () => (
    <Context>
      <Footer />
    </Context>
  ));
