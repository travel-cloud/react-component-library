import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Loader from './Simple';
import SkeletonLoader from './Skeleton';
import GridWireframe from '../List/Grid/Wireframe';
import UI from '../UI';
import Component from '../Component';

const stories = storiesOf('Loaders', module);

stories.addDecorator(withKnobs);

stories.add('Simple Loader', () => (
  <UI>
    <Component>
      <Loader />
    </Component>
  </UI>
));

stories.add('Skeleton Loader', () => (
  <UI>
    <Component>
      <SkeletonLoader Wireframe={GridWireframe} />
    </Component>
  </UI>
));

stories.add('Documentation', withInfo('Generic HTML loader')(() => 'Click the button at top-right to view the info'));

