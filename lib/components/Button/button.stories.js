import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Button from '../Button';

const stories = storiesOf('Buttons', module);

stories.addDecorator(withKnobs);

stories.add('Documentation', withInfo('Generic HTML button')(() => 'Click the button at top-right to view the info'));

stories.add('Standard button', () => (
  <Button label={text('Label', 'Click Me')} onClick={action('clicked')} />
));
