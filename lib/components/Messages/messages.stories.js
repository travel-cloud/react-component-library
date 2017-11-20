import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Messages from '../Messages';

const stories = storiesOf('Messages', module);

stories.addDecorator(withKnobs);

stories.add('Documentation', withInfo('Generic HTML messages')(() => 'Click the button at top-right to view the info'));

const messages = [
  {
    type: 'success',
    text: 'Your changes have been saved.',
  },
  {
    type: 'error',
    text: 'Value is not a number',
  },
];
stories.add('Standard button', () => (
  <Messages messages={messages} />
));
