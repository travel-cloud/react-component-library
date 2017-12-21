import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import UI from '../UI';
import Component from '../Component';
import Pagination from '../Pagination';

const stories = storiesOf('Pagination', module);

stories.add('Standard', () => (
  <UI>
    <Component>
      <Pagination
        currentPage="1"
        pageCount="1"
        goToPage={action('go to page')}
      />
    </Component>
  </UI>
));

stories.add('Documentation', withInfo('Pagination widget')(() => 'Standard pagination'));
