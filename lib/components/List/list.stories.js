import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Grid from './Grid';
import GridWireframe from './Grid/Wireframe';
import Simple from './Simple';

const stories = storiesOf('Lists', module);

const simpleData = ['Item one', 'Item two', 'Item three'];

const gridData = [
  {
    keyOne: 'Item one',
    keyTwo: 'Item one x',
    keyThree: 'Item one y',
    keyFour: 'Item one z',
  },
  {
    keyOne: 'Item two',
    keyTwo: 'Item two x',
    keyThree: 'Item two y',
    keyFour: 'Item two z',
  },
];

const nestedGridData = [
  {
    nestedKeys: {
      keyFive: 'Nested Item one N',
    },
  },
  {
    nestedKeys: {
      keyFive: 'Nested Item two N',
    },
  },
];

const testKeyMap = ['keyOne', 'keyThree', { link: '/test', key: 'keyFour', text: 'Test Key Data' }];

stories.add('Documentation', withInfo('Generic HTML list')(() => 'Click the button at top-right to view the info'));

stories.add('Simple List', () => (
  <Simple items={simpleData} />
));

stories.add('Grid List', () => (
  <Grid items={gridData} keyMap={testKeyMap} />
));

stories.add('Nested Data Grid List', () => (
  <Grid items={nestedGridData} keyMap={[{ key: 'nestedKeys.keyFive', text: 'This is displaying nested data' }]} />
));

stories.add('Grid List Wireframe', () => (
  <GridWireframe />
));
