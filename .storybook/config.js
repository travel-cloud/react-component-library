import { configure } from '@storybook/react';

const req = require.context('../lib/components', true, /stories\.js$/);

const loadStories = () => {
  req.keys().forEach(req);
};

configure(loadStories, module);
