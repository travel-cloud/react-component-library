import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Sidebar from './Sidebar';

const stories = storiesOf('Menus', module);

stories.addDecorator(withKnobs);

stories.add('Documentation', withInfo('Generic HTML menus')(() => 'Click the button at top-right to view the info'));

stories.add('Sidebar', () => (
  <Sidebar
    onClick={action('clicked')}
    menuItems={['Test one', 'Test two']}
  />
));
