import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Logo from './Logo';
import UI from '../UI';

const stories = storiesOf('Sidebar', module);

stories.addDecorator(withKnobs);

stories.add('Sidebar', () => (
  <UI>
    <Sidebar>
      <Logo>
        Logo here
      </Logo>
      <Nav>
        <a href="#">Home</a>
        <a href="#">Settings</a>
        <a href="#">Logout</a>
      </Nav>
    </Sidebar>
  </UI>
));

stories.add('Documentation', withInfo('Generic HTML sidebar with nav and logo')(() => 'Click the button at top-right to view the info'));

