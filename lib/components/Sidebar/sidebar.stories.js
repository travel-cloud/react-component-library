import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Logo from './Logo';

const stories = storiesOf('Sidebar', module);

stories.addDecorator(withKnobs);

stories.add('Documentation', withInfo('Generic HTML sidebar with nav and logo')(() => 'Click the button at top-right to view the info'));

stories.add('Sidebar', () => (
  <Sidebar>
    <Logo>
      Logo here
    </Logo>
    <Nav>
      Menu here
    </Nav>
  </Sidebar>
));
