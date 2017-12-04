import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import UI from '../UI';
import Component from '../Component';
import Button from '../Button';

const stories = storiesOf('Buttons', module);

stories.addDecorator(withKnobs);

stories.add('Standard', () => (
  <UI>
    <Component>
      <Button label={text('Label', 'Click Me')} onClick={action('clicked')} />
    </Component>
  </UI>
));

stories.add('Documentation', withInfo('Generic HTML button')(() => 'Standard button'));

