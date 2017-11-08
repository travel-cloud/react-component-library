import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Loader from './Simple';
import SkeletonLoader from './Skeleton';
import GridWireframe from '../List/Grid/Wireframe';

const stories = storiesOf('Loaders', module);

stories.addDecorator(withKnobs);

stories.add('Documentation', withInfo('Generic HTML loader')(() => 'Click the button at top-right to view the info'));

stories.add('Simple Loader', () => (
  <Loader />
));

stories.add('Skeleton Loader', () => (
  <SkeletonLoader Wireframe={GridWireframe} />
));
