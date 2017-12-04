import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Messages from '../Messages';
import UI from '../UI';
import Component from '../Component';

const stories = storiesOf('Messages', module);

stories.addDecorator(withKnobs);

const success = [
  {
    type: 'success',
    text: 'Your changes have been saved',
  },
];

const error = [
  {
    type: 'error',
    text: 'Value is not a number',
  },
];

stories.add('Success', () => (
  <UI>
    <Component>
      <Messages messages={success} />
    </Component>
  </UI>
));

stories.add('Error', () => (
  <UI>
    <Component>
      <Messages messages={error} />
    </Component>
  </UI>
));

stories.add('Documentation', withInfo('Generic HTML messages')(() => 'Click the button at top-right to view the info'));

