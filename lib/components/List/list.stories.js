import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Grid from './Grid';
import GridWireframe from './Grid/Wireframe';
import Simple from './Simple';
import UI from '../UI';
import Component from '../Component';

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

const linkGridData = [
  {
    linkDesc: 'Link Item one x',
    linkKey: '12345',
  },
  {
    linkDesc: 'Link Item two x',
    linkKey: '6789',
  },
];

const testKeyMap = [
  { onClick: () => {}, key: 'keyOne', text: 'Test Key One' },
  { key: 'keyThree', text: 'Test Key three' },
  { key: 'keyFour', text: 'Test Key Data' },
];

stories.add('Simple List', () => (
  <UI>
    <Component>
      <Simple items={simpleData} />
    </Component>
  </UI>
));

stories.add('Grid List', () => (
  <UI>
    <Component>
      <Grid items={gridData} keyMap={testKeyMap} />
    </Component>
  </UI>
));

stories.add('Nested Data Grid List', () => (
  <UI>
    <Component>
      <Grid items={nestedGridData} keyMap={[{ key: 'nestedKeys.keyFive', text: 'This is displaying nested data' }]} />
    </Component>
  </UI>
));

stories.add('URL Links Data Grid List', () => (
  <UI>
    <BrowserRouter>
      <main>
        <Route path="/test" component={Component} />
        <Component>
          <Grid
            items={linkGridData}
            keyMap={[{
              key: 'linkDesc',
              text: 'This is displaying a href link',
              link: {
                url: '/test',
                key: 'linkKey',
              },
            },
            ]}
          />
        </Component>
      </main>
    </BrowserRouter>
  </UI>
));

stories.add('Grid List Wireframe', () => (
  <UI>
    <Component>
      <GridWireframe />
    </Component>
  </UI>
));

stories.add('Documentation', withInfo('Generic HTML list')(() => 'Click the button at top-right to view the info'));

